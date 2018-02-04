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
  
# Python flask(Installation Guide)
* Python 2.6 or higher is usually required for installation of Flask in windows.
* The following command installs virtualenv under C:/pythonX/scripts path.Here X is the version name of Python.
pip install virtualenv
* Once installed, new virtual environment is created in a folder.
   * mkdir newproj
    * cd newproj
    * virtualenv venv
* To activate corresponding environment, on Linux/OS X, use the following −
   * Sudo apt-get install virtualenv
* On Windows, following can be used −
   * venv\scripts\activate
* We are now ready to install Flask in this environment.
  * pip install Flask
  * pip install -U flask-cors
* To install requests module
  * apt-get install python-requests
# Run
* Step1:open in command prompt go to the directory where the file is stored
example:cd Users\Anitha\Desktop\task1-Hasura
* Step2:to run q7.py,type q7.py in command prompt or python q7.py in ubuntu
Example:q7.py
We get these following message
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 239-973-402
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
* Step3:http://127.0.0.1:5000/ open this url in any browser to see the output add extension accordingly as given in the program.Further instruction for each program is as follows.
* Step4:To quit press ctrl+c in command prompt


To run happy.py
* Add /happiness
  * Example:http://127.0.0.1:5000/happiness
  
  We get output as json data
