<div align="center">
  <img width="200" src="public/logo512.png" alt="Data Structures and Algorithms logo">

# [Algorithms Visualizer: Front-End Web App using D3](https://www.big-o.app/)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://www.big-o.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/f5489329-e4fe-48e6-9759-62c0f5d07947/deploy-status)](https://app.netlify.com/sites/nervous-davinci-64c41b/deploys)
![Security Headers](https://img.shields.io/security-headers?url=https%3A%2F%2Fwww.big-o.app%2F)
[![Maintainability](https://api.codeclimate.com/v1/badges/6536880fde9ad630e20e/maintainability)](https://codeclimate.com/github/JacobGrisham/Data-Structures-and-Algorithms-Visualizer/maintainability)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/75dcba64872d4cafb6d77c3cbe7a9030)](https://www.codacy.com/gh/JacobGrisham/Data-Structures-and-Algorithms-Visualizer/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JacobGrisham/Data-Structures-and-Algorithms-Visualizer&amp;utm_campaign=Badge_Grade)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/jacobgrisham/Data-Structures-and-Algorithms-Visualizer)
</div>

## 🎓 [Final Project](https://cs50.harvard.edu/x/2020/project/) for [Harvard's Introduction to Computer Science CS50 hosted on eDX](https://www.edx.org/course/cs50s-introduction-to-computer-science)
-   I chose to create a web-based searching and sorting algorithms visualization tool
-   My project video submission is hosted on CS50's [Gallery of Final Projects](https://cs50.harvard.edu/x/2021/gallery/)

## 🎥 Walkthrough on Youtube
[<img src="src/assets/images/youtube-thumbnail.png" width="100%">](https://youtu.be/rSeSffuw4Tg)

## 💡Lessons Learned
-   Searching and Sorting Algorithms
-   Asynchronous Javascript
-   [D3](https://d3js.org/) Data Visualization
-   Refactored applciation as a [Create-React-App Typescript Progressive Web App (PWA)](https://create-react-app.dev/docs/making-a-progressive-web-app/)
-   Integrating D3 with React
-   Refactored application with [CSS Modules](https://glenmaddern.com/articles/css-modules) and [Sass](https://sass-lang.com/) styling
-   [Netlify](https://www.netlify.com/) to host a static [Jamstack](https://jamstack.org/) website
-   (Deprecated) Hosting [Flask](https://flask.palletsprojects.com/en/2.0.x/) backend server on [Heroku](https://www.heroku.com/)
-   (Deprecated) Continuous Integration and Continuous Deployment to Heroku with [circleci](https://circleci.com/)
-   (Deprecated) Bootstrap 4 for styling

## 🛠 Technologies
|Front-End    |Deployment|
| ----------- | -------- |
|React	      |Netlify   |
|Typescript		|.         |
|ES6          |.         |
|D3           |.         |
|CSS Modules  |.         |
|Sass         |.         |

## ⚖️ Methodology
-   Built an application based on algorithms to learn, understand, and practice algorithmic programming. Furthermore, chose to visualize the algorithms to gain an even deeper understanding how the algorithms work and to make the application interactive.
-   D3 Library for data visualization because D3 is the ideal solution for data visualization problems and to challenge myself with learning a new framework.
-   Initially built this application with a backend server using the Python framework, Flask, which was primarily used for its [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) templating capabilities. The application was hosted on the [free tier plan on Heroku](https://devcenter.heroku.com/articles/free-dyno-hours), alongside two other application using the free tier plan. The main problem with this approach was that it was both heavy and expensive. It was heavy in that Jinja wasn't strictly neccessary to achieve templating. It was expensive in that the free tier plan on Heroku put the app to sleep after 30 minutes. Furthermore, using [kaffiene](https://kaffeine.herokuapp.com/) to circumvent sleeping caused the free dyno minutes to expire by the 24th of each month. Therefore, after learning about React and the [Jamstack](https://jamstack.org/), I put the two together and refactored this application by migrating from a server-based architecture with Flask to a static website architecture with [Create-React-App Typescript Progressive Web App (PWA)](https://create-react-app.dev/docs/making-a-progressive-web-app/), and by switching cloud-hosting providers from Heroku to Netlify. The code is more simple with React doing all the work and more secure with being statically typed with Typescript. The website has better performance, offline capability, and 100% uptime as a PWA.
-   Initially all the javascript for controlling 95% of the application was stored in one file. Refactoring the application with React opened the opporunity to use split the logic into modular chunks that live in their own files. Now React components only load the logic that they need and the code-splitting enables more organized code.
-   Initially syled with Bootstrap 4 to quickly style the application and to shift focus towards spending more time on the data visualization and underlying algorithms. After shipping the minimum viable product to production, went back and refactored the frontend with [CSS Modules](https://glenmaddern.com/articles/css-modules) and [Sass](https://sass-lang.com/) since the file size and load-time of Bootstrap was expensive relative to how much I was using it the website - I used less than 10 Boostrap classes. There are a number of benefits of using CSS Modules and Sass. Similar to the point above, CSS Modules allows React components to only load the resources, in this case styling, that they need, __and__ CSS Modules promotes code-splitting enables more organized code. Sass, compared to vanilla CSS, allows nesting and variable definitions. Now the code is modular and more DRY. However, I noticed that CSS Modules isn't compatible with D3 since D3 doesn't have access to the hashed classnames generated by CSS Modules. Therefore, I included one vanilla CSS file referenced at the root of the application for D3 to have constant access to.

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
