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

@app.errorhandler(404)
def pageNotFound(error):
    return render_template('404.html'), 404

# Run Server
if __name__ == '__main__':
    app.run(debug = True)
# Run the following in the command line: python application.py