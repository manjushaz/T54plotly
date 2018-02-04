# Plotly - World Happiness Report 2017
* What is it?
  * A web based custom service deployed on Hasura platform which allows user to pick a metric(s) from a list based on World Happiness Report 2017 and plots the data for chosen metric(s) by making use of plotly.js.

* Implementation
  * It is developed by using React JS as front end and Python Flask as back end.
Create React App with Material UI components is used to develop a Single Page App (SPA) which allows user to select chart type, x-axis and y-axis fields to plot the report using plotly.js. The entire happiness report data set is also displayed.
 
* Installation
  * Install Node software (in windows/linux/any operating system supporting node). Refer to https://nodejs.org
  * Open terminal.
  * Create a folder for your project and execute command git init in that folder (assuming git is installed).
  * Clone this GIT repo completely into your local folder
  * After cloning successfully, go to folder hello-react\microservices\ui\app and do npm install and then npm start, frontend runs in   http://localhost:3000

* How it works?
  * Select chart type.
  * Select x-axis and y-axis, report is generated.
