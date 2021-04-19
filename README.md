# [Algorithms Visualizer: Front-End Web App using D3](https://dsa-visualization.herokuapp.com/)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://dsa-visualization.herokuapp.com/)
![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fdsa-visualization.herokuapp.com%2F)
[![Maintainability](https://api.codeclimate.com/v1/badges/6536880fde9ad630e20e/maintainability)](https://codeclimate.com/github/JacobGrisham/Data-Structures-and-Algorithms-Visualizer/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/75dcba64872d4cafb6d77c3cbe7a9030)](https://www.codacy.com/gh/JacobGrisham/Data-Structures-and-Algorithms-Visualizer/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JacobGrisham/Data-Structures-and-Algorithms-Visualizer&amp;utm_campaign=Badge_Grade)
[![<JacobGrisham>](https://circleci.com/gh/JacobGrisham/Data-Structures-and-Algorithms-Visualizer.svg?style=svg)](https://app.circleci.com/pipelines/github/JacobGrisham/Data-Structures-and-Algorithms-Visualizer)
[![Updates](https://pyup.io/repos/github/JacobGrisham/Data-Structures-and-Algorithms-Visualizer/shield.svg)](https://pyup.io/repos/github/JacobGrisham/Data-Structures-and-Algorithms-Visualizer/)
[![Python 3](https://pyup.io/repos/github/JacobGrisham/Data-Structures-and-Algorithms-Visualizer/python-3-shield.svg)](https://pyup.io/repos/github/JacobGrisham/Data-Structures-and-Algorithms-Visualizer/)
## Final Project from [Harvard's Introduction to Computer Science CS50 hosted on eDX](https://www.edx.org/course/cs50s-introduction-to-computer-science)
## 🎓 [Final Project](https://cs50.harvard.edu/x/2020/project/)
-   The climax of this course is its final project. I chose to create a web-based searching and sorting algorithms visualization tool.
-   My project video submission is hosted on CS50's [Gallery of Final Projects](https://cs50.harvard.edu/x/2021/gallery/)

## ▶️ Walkthrough on Youtube
[<img src="static/images/youtube-thumbnail.png" width="100%">](https://youtu.be/rSeSffuw4Tg)

## 💡Lessons Learned
-   Searching and Sorting Algorithms
-   D3 Data Visualization
-   Asynchronous Javascript
-   Continuous Integration with CircleCI and Continuous Deployment with Heroku


## 🛠 Technologies
|Front-End|Back-End|Deployment|
| ------- | ------ | -------- |
|HTML5	  |Flask   |CircleCI  |
|CSS3		  |Python  |Heroku    |
|Bootstrap 4|.     |.         |
|Javascript|.		   |.         |
|D3       |.       |.         |

## ⚖️ Methodology
-   D3 Library for data visualization to both challenge myself with learning a new framework and because D3 is the ideal solution for data visualization problems
-   Bootstrap 4 for increasing my experience working with it and to shift focus towards spending more time on the data visualization and underlying algorithms
## ⚙️ Features
-   Visualize Linear Search, Binary Search, Bubble Sort, Selection Sort, Merge Sort, and Insertion Sort
-   Random numbers in an array are graphed as a bar chart
-   The values of the array are displayed and updated in an HTML table below the bar chart
-   They are also accessible through a tooltip that displays the value when hovered over
-   The Javascript Execution times are logged in Bootstrap 4 cards to allow comparison of different algorithm runtimes and for further information on the Big-O

To Do:
-   Add unit testing
-   Allow user to specify the speed they want the algorithm to run
-   Add more algorithms as I progress in my studies
-   Expand upon the scope by incorporating data structure visualization and manipulation
## 🚀 Getting Started
To run this project locally:
-   In your terminal, navigate to the root project directory and run the following commands
-   Activate the virtual environment
```
$ pipenv shell
```
-   To install the dependencies
```
$ pipenv install -r requirements.txt
```
-   To start the web server, execute (without debugging):
```
$ python app.py 
```
-   Alternatively, execute (without debugging):
```
$ export FLASK_APP=application.py
$ flask run
```
## 📐 Tests
-   Add unit testing

## 📣 Acknowledgments
-   Application is kept awake from 6:00 a.m. to 11:59 p.m. PST with [Kaffeine](https://kaffeine.herokuapp.com/)

## 🔒 License
Copyright Notice and Statement: currently not offering any license. Permission only to view and download.
