import os
from flask import Flask, render_template

# Configure application
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/algorithms")
def algorithms():
  return render_template("algorithms.html")

@app.route("/data-structures")
def datastructures():
  return render_template("data-structures.html")

@app.errorhandler(404)
def pageNotFound(error):
    return render_template('404.html'), 404

# Run Server
if __name__ == '__main__':
    app.run(debug = False)
# Run the following in the command line: python application.py
# Set debug = True during development. Running Flask applications in debug mode results in the Werkzeug debugger being enabled. This includes a feature that allows arbitrary code execution. Documentation for both Flask and Werkzeug strongly suggests that debug mode should never be enabled on production systems.