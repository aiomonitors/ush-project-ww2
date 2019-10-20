import flask
from flask import Flask, render_template, jsonify, request, session, make_response, redirect, url_for
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html'), 200

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
    return render_template('ww2.html'), 200

if __name__ == '__main__':
    app.run()