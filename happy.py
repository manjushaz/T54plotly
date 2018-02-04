from flask import Flask, render_template,jsonify, redirect, url_for, request ,make_response,abort
from flask_cors import CORS
import requests
import json
import os
app = Flask(__name__)
CORS(app)
@app.route('/happiness')
def happiness():
    #print(os.environ.get('auth'))
    url = "https://data.chestnut27.hasura-app.io/v1/query"

    # This is the json payload for the query
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


if __name__ == '__main__':
   app.run(debug = True)
