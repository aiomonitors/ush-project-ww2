import flask, json
from flask import Flask, render_template, jsonify, request, session, make_response, redirect, url_for
app = Flask(__name__)

def open_json(jsonfile):
    try:
        with open(jsonfile, 'r') as outfile:
            data = outfile.read()
            data = json.loads(data)
            outfile.close()
            return(data)
    except:
        return(None)

@app.route('/', methods=['GET'])
def index():
    return render_template('ww2.html'), 200

@app.route('/ww2', methods=['GET'])
def ww2():
    return render_template('ww2.html'), 200

@app.route('/current', methods=['GET'])
def current():
    return render_template('current.html'), 200

@app.route('/race', methods=['GET'])
def race():
    return render_template('arms.html'), 200

@app.route('/sources', methods=['GET'])
def sources():
    sources = open_json('sources.json')['sources']
    return render_template('sources.html', sources=sources), 200

if __name__ == '__main__':
    app.run()