from src import app
# from flask import jsonify
from flask import Flask, render_template,jsonify, redirect, url_for, request ,make_response,abort

import requests
import json
import os


@app.route("/")
def home():
    return "Hasura Hello World"

# Uncomment to add a new URL at /new

# @app.route("/json")
# def json_message():
#     return jsonify(message="Hello World")

@app.route('/happiness')
def happiness():
    url = "https://data.chestnut27.hasura-app.io/v1/query"
    requestPayload = {
        "type": "select",
        "args": {
            "table": "happinessrepo",
            "columns": [
                "*"
            ]
        }
    }
    # Setting headers
   
    headers = {
        "Content-Type": "application/json"
    }
    # Make the query and store response in resp
    resp = requests.request("POST", url, data=json.dumps(requestPayload), headers=headers)
    # resp.content contains the json response.
    return resp.content

