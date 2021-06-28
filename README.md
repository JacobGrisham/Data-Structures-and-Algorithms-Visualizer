# [Algorithms Visualizer: Front-End Web App using D3](https://www.big-o.app/)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://dsa-visualization.herokuapp.com/)
![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fdsa-visualization.herokuapp.com%2F)
[![Maintainability](https://api.codeclimate.com/v1/badges/6536880fde9ad630e20e/maintainability)](https://codeclimate.com/github/JacobGrisham/Data-Structures-and-Algorithms-Visualizer/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/75dcba64872d4cafb6d77c3cbe7a9030)](https://www.codacy.com/gh/JacobGrisham/Data-Structures-and-Algorithms-Visualizer/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JacobGrisham/Data-Structures-and-Algorithms-Visualizer&amp;utm_campaign=Badge_Grade)
## Final Project from [Harvard's Introduction to Computer Science CS50 hosted on eDX](https://www.edx.org/course/cs50s-introduction-to-computer-science)
## 🎓 [Final Project](https://cs50.harvard.edu/x/2020/project/)
-   The climax of this course is its final project. I chose to create a web-based searching and sorting algorithms visualization tool.
-   My project video submission is hosted on CS50's [Gallery of Final Projects](https://cs50.harvard.edu/x/2021/gallery/)

## 🎥 Walkthrough on Youtube
[<img src="src/assets/images/youtube-thumbnail.png" width="100%">](https://youtu.be/rSeSffuw4Tg)

## 💡Lessons Learned
-   Searching and Sorting Algorithms
-   [D3](https://d3js.org/) Data Visualization
-   Asynchronous Javascript
-   Continuous Integration and Continuous Deployment with CircleCI
-   [Jamstack](https://jamstack.org/)
-   Using [Netlify](https://www.netlify.com/) to host a static website
-   (Deprecated) Hosting Flask backend server on [Heroku](https://www.heroku.com/)

## 🛠 Technologies
|Front-End    |Deployment|
| ----------- | -------- |
|React	      |Netlify   |
|Typescript		|.         |
|ES6          |.         |
|D3           |.         |
|Bootstrap 4  |.         |

## ⚖️ Methodology
-   Initially built this website with a backend server using the Python framework, Flask, which was primarily used for its routing and templating capabilities. The website was hosted on the [free tier plan on Heroku](https://devcenter.heroku.com/articles/free-dyno-hours), alongside two other websites using the free tier plan. The main problem with this approach was that it was both heavy and expensive. It was heavy in that Flask wasn't strictly neccessary to achieve routing and templating. It was expensive in that the free tier plan on Heroku put the app to sleep after 30 minutes and using [kaffiene](https://kaffeine.herokuapp.com/) to circumvent sleeping caused the free dyno minutes to expire by the 24th of each month. Therefore, after learning about React and the [Jamstack](https://jamstack.org/), I put the two together and refactored this application by migrating from a View-Controller architecture with Flask to a static website architecture with [Create-React-App Typescript Progressive Web App (PWA)](https://create-react-app.dev/docs/making-a-progressive-web-app/), and by switching cloud-hosting providers from Heroku to Netlify. The code is more simple with React doing all the work and more secure with being statically typed. The website has better performance, offline capability, and 100% uptime.
-   D3 Library for data visualization to both challenge myself with learning a new framework and because D3 is the ideal solution for data visualization problems
-   Bootstrap 4 for increasing my experience working with it and to shift focus towards spending more time on the data visualization and underlying algorithms

## ⚙️ Features
-   Visualize Linear Search, Binary Search, Bubble Sort, Selection Sort, Merge Sort, and Insertion Sort
-   Random numbers in an array are graphed as a bar chart
-   The values of the array are displayed and updated in an HTML table below the bar chart
-   They are also accessible through a tooltip that displays the value when hovered over
-   The Javascript Execution times are logged in Bootstrap 4 cards to allow comparison of different algorithm runtimes and for further information on the Big-O

## 🚀 Getting Started
### To run this project on your system:
-   In your terminal, navigate to the root project directory and run the following commands
-   Download dependencies
```
$ npm install
```
-   Run the application
```
$ npm start
```

## 📐 Tests

## 🔒 License
Copyright Notice and Statement: currently not offering any license. Permission only to view and download.
