# Plotly - World Happiness Report 2017
## What is it?
A web based custom service deployed on Hasura platform which allows user to pick a metric(s) from a list based on World Happiness Report 2017 and plots the data for chosen metric(s) by making use of plotly.js.

## Implementation
It is developed by using React JS as front end and Python Flask as back end.
Create React App with Material UI components is used to develop a Single Page App (SPA) which allows user to select chart type, x-axis and y-axis fields to plot the report using plotly.js. The entire happiness report data set is also displayed.
 
## Requirements

* [Hasura CLI tool](https://docs.hasura.io/0.15/manual/install-hasura-cli.html)
* [create-react-app (for testing and improvement)](http://www.react.express/quick_start) (for testing and improvement)
* Python 2.7 or higher (for testing and improvement)
* [Flask](http://flask.pocoo.org/docs/0.12/installation/) (for testing and improvement)

## Setup Guide

* Get the project using
`$ hasura quickstart manjusha/flask-react-plotly`
* A git remote, hasura, is created and initialized with your project directory.
* Run `git add .`, `git commit -m "First commit"`, and `git push hasura master`.
* Run `hasura microservice open ui` to open our app.

## How it works?

* Select chart type.
* Select x-axis and y-axis, report is generated.
 
## Improvements

* To make changes to the UI, navigate to `/microservices/ui/src` and edit the ReactJS files in that folder as per your requirement.
* To make changes to the backend, navigate to `/microservices/app/src` and edit the Python Flask files in that folder as per your requirement.
* Commit those changes, and perform `git push hasura master` to deploy the changes.

## Contributors

* Manjusha Z - [GitHub Profile](https://github.com/manjushaz)
* Anitha A V - [Github Profile](https://github.com/Anithama)

## Acknowledgements
[Hasura](https://hasura.io/) for providing this opportunity through HPDF.
