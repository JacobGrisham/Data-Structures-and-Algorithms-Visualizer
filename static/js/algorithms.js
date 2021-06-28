// --------------------------------------
// Global Variables
// --------------------------------------
/* global d3 */
const width = 600;
const height = 600;
const padding = 50;
const barPadding = 1;
const svg = d3.select("svg")
                .attr("viewBox", `0 0 ${width} ${height}`)
var array = [];
const n = 100;
var barWidth = width / n - barPadding;
const animationDuration = 1000;
var animationStop = false;

// --------------------------------------
// Global Functions
// --------------------------------------
// Random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Create initial random number array
for (var i = 0; i < n; i++){
  array.push(getRandomInt(1000));
}
var len = array.length;

// Reset color of bars
function colorReset(){
  for (var i = 0; i < len; i++){
    d3.select("#bar_" + i)
        .style("fill", "white");
  }
}

// Create card to display runtime and Big-O information
function addCard(algorithm, end, start, bigO){
  d3.select("#runtimes")
  .append("div")
  .html(
    `<div class="card mx-2 mb-2 card-sizing">
      <div class="card-body">
        <div class="card-header"> ${algorithm} Javascript Execution Time</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> ${end - start} ms </li>
            <li class="list-group-item"> ${bigO} </li>
          </ul>
      </div>
    </div>`
);}

// Stop previous animation from running because setInterval won't stop otherwise
function stopPreviousAnimation() {
  animationStop = true;
}

// --------------------------------------
// Draw Graph
// --------------------------------------

function drawGraph(array) {

// Create y-axis scale to ensure bars fit inside svg area and for calculating y and height attribute in rect
var yScale = d3.scaleLinear()
               .domain([0, Math.max(...array)])
               .range([height, 0]);

var xScale = d3.scaleLinear()
                .domain([0, n])
                .range([0, width]);

var bars = d3.select("svg")
                .attr("viewBox", `0 0 ${width} ${height}`)
                .selectAll(".bar")
                .data(array);

var g = bars
                .enter()
                .append("g")
                  .classed("bar", true);

// Create a tooltip
var tooltip = d3.select("#tooltip")
                .append("div")
                .style("opacity", 0)
                .attr("class", "tooltip");

// Draw rectangles
g.append("rect")
  .attr("transform", function(d, i) {return "translate(" + (xScale(i) - (barWidth + barPadding)) + ",0)";})
  .attr("y", (d) => {return yScale(d);})
  .attr("height", (d) => {return height - yScale(d);})
  .attr("width", (d) => barWidth)
  .on("mousemove", (d, i) => {tooltip.transition().duration(100).style("opacity", 0.9);      
  tooltip.html(d).style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY) + "px");})
  .on("mouseleave", (d) => {tooltip.transition() .duration(300) .style("opacity", 0);});

  // .attr("x", (d, i) => {return (barWidth + barPadding) * i})

// Remove old data
bars
.exit()
.remove();

// Update data
g.merge(bars)
  .select("rect")
  .attr("transform", function(d, i) {return "translate(" + (xScale(i) - (barWidth + barPadding)) + ",0)";})
  .attr("y", (d) => {return yScale(d);})
  .attr("height", (d) => {return height - yScale(d);})
  .attr("width", (d) => barWidth)
  .attr("id", function(d, i) {return "bar_" + i;});

  // Add this to g.merge(bars) when clicking on Unsort or New Data
  // .transition()
  // .delay(function(d, i) { return i * 5; })
}

// --------------------------------------
// Data Table
// --------------------------------------

function addTable(array){

  var table = d3.select("#data")
            .selectAll("td")
            .data(array);

  var g = table
            .enter()
            .append("td");

  g.text((d) => {return d;});

  // Erase any old data from table
  table
      .exit()
      .remove();

  g.merge(table)
      .text((d) => {return d;});
}

// --------------------------------------
// Intialize First Graph and Table
// --------------------------------------

d3.select(window).on("load", drawGraph(array));
d3.select(window).on("load", addTable(array));

// --------------------------------------
// Functional Programming
// --------------------------------------

function reset(method) {
  method();
  colorReset();
  drawGraph(array);
  addTable(array);
}

// --------------------------------------
// Unsort
// --------------------------------------

function unsort() {
  
  // Fisher-Yates Shuffling
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {

    // Pick a remaining element
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

function unsortReset() { reset(unsort) }

// --------------------------------------
// New Data
// --------------------------------------

function newData() {
  
  array = [];

  for (var i = 0; i < n; i++){
    array.push(getRandomInt(1000));
  }
}

function newDataReset() { reset(newData) }

// --------------------------------------
// Object Oriented Programming (OOP)
// --------------------------------------

function AlgorithmObject(name, algorithm, bigO) {
    // constructor functions
    this.name = name;
    this.algorithm = algorithm;
    this.bigO = bigO;
}

// --------------------------------------
// Functional Programming
// --------------------------------------

function AlgorithmVisualization(Algorithm) {

    // Stop any animations
    stopPreviousAnimation();

    // Reset color of bars
    colorReset();

    // Begin run-time stopwatch
    let start = window.performance.now();

    // Run the algorithm visualization
    Algorithm.algorithm();

    // Commented out until I can solve the async/await puzzle
    // // Create sorted array to compare against algorithm's array
    // let sortedArray = array
    // sortedArray.sort(function(a, b) {
    //   return a - b;
    // });

    // function checkArrayEquality() {
    //   JSON.stringify(sortedArray) == JSON.stringify(array) ? true : false
    // }

    // // End run-time stopwatch when the two arrays are equal
    // async () => {

    //   await checkArrayEquality();

    //   let end = window.performance.now();
    //   // Append new card with runtime
    //   addCard(Algorithm.name, end, start, Algorithm.bigO);        
    //   break;
    // }

    let end = window.performance.now();
    // Append new card with runtime
    addCard(Algorithm.name, end, start, Algorithm.bigO);

}

// --------------------------------------
// Linear Search
// --------------------------------------
function linearSearch() {

  // Obtain input from user
  let input = document.getElementById("linear-search-input").value;

  // Iterate over data
  for (let i = 0; i < n; i++){
    
    if (array[i] === parseInt(input, 10)) {

      // Color bar red if matched
      d3.selectAll(".bar")
          .select("#bar_" + array.indexOf(array[i]))
          .transition()
          .delay(function(d, i) { return i * 10; })
          .style("fill", "red");
      // Stop for loop
      break;
    }
    else {
      d3.selectAll(".bar")
          .select("#bar_" + i)
          .transition()
          .duration(1)
          .delay(function(d, i) { return i * 10; })
          .style("fill", "grey");
    }
  }
}

const linearSearchAlgorithm = new AlgorithmObject("Linear Search", linearSearch, "Big-O O(n), Omega Ω(1)");
function linearSearchAlgorithmVisualization() {AlgorithmVisualization(linearSearchAlgorithm) }

// --------------------------------------
// Binary Search
// --------------------------------------

function binarySearch(event) {

  // Prevent page refresh from form submission
  event.preventDefault();
  
  // Obtain input from user
  let input = document.getElementById("binary-search-input").value;

  function colorGrey(position){
    d3.selectAll(".bar")
      .select("#bar_" + position)
      .style("fill", "grey");
  }

  let arrayStart = 0, arrayEnd = len - 1, i = 0;     
  // Iterate while arrayStart is greater than arrayEnd 
  while (i < n){
    // Find the mid index 
    let mid = Math.floor((arrayStart + arrayEnd)/2); 

    // If element is present at mid, return True 
    if (array[mid] === parseInt(input, 10)){

      // Color bar red if matched
      d3.selectAll(".bar")
        .select("#bar_" + array.indexOf(array[mid]))
        .style("fill", "red");
      
      // Stop while loop
      i = n;
    }

    // Else look in left or right half accordingly 
    else if (array[mid] < parseInt(input, 10)){
      // Look right of sorted array
      arrayStart = mid + 1;
      colorGrey(arrayStart);

      // Increment i to prevent while loop
      i++;
    }
    else {
      // Look left of sorted array
      arrayEnd = mid - 1;
      colorGrey(arrayEnd);
        
      // Increment i to prevent while loop
      i++;
    }
  }
}

const binarySearchAlgorithm = new AlgorithmObject("Binary Search", binarySearch, "Big-O O(log n), Omega Ω(1)");
function binarySearchAlgorithmVisualization() { AlgorithmVisualization(binarySearchAlgorithm) }

// --------------------------------------
// Bubble Sort
// --------------------------------------

function bubbleSort() {
  
  // Allow recursive animation
  animationStop = false;

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      // Recursive setTimeout animation
      setTimeout(function bubbleSorting() {

        if (array[i] > array[i + 1]) {
          // Assign the values to variables
          // First is bigger
          let first = array[i];
          // Second is smaller
          let second = array[i + 1];

          // Make the swap
          array[i + 1] = first;
          array[i] = second;

          swapped = true;

          drawGraph(array);
          addTable(array);
        }

        if (animationStop === false){
          setTimeout(bubbleSorting, animationDuration);
        }
      }, animationDuration);
    }
  } while (swapped);
}

const bubbleSortAlgorithm = new AlgorithmObject("Bubble Sort", bubbleSort, "Big-O O(n squared), Omega Ω(n)");
function bubbleSortAlgorithmVisualization() { AlgorithmVisualization(bubbleSortAlgorithm) }

// --------------------------------------
// Selection Sort
// --------------------------------------
function selectionSort() {
  
  // Iterate through the array
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      let min = i;
      // Iterate through array one step ahead of previous iteration
      for (let j = i + 1; j < len; j++) {
        // Keep track of the smallest value
        if (array[min] > array[j]) {
          min = j;
        }
      }
      // Swap places with the smallest value
      if (min !== i) {
          let tmp = array[i];
          array[i] = array[min];
          array[min] = tmp;
          drawGraph(array);
          addTable(array);
        }
    }, animationDuration);
  }
}

const selectionSortAlgorithm = new AlgorithmObject("Selection Sort", selectionSort, "Theta ϴ(n squared)");
function selectionSortAlgorithmVisualization() { AlgorithmVisualization(selectionSortAlgorithm) }

// --------------------------------------
// Merge Sort
// --------------------------------------

function mergeSort() {
  
  function mergeSorting (array) {
    // Error handling
    if (array.length <= 1) {
      return array;
    }
    // Find middle
    const middle = Math.floor(array.length / 2);
    // Divide array into right and left halves
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Use recursion to combine the left and right
    return merge(mergeSorting(left), mergeSorting(right));
  }

  // Merge the two arrays: left and right
  function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    // Concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
        drawGraph(resultArray);
        addTable(array);
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
        drawGraph(resultArray);
        addTable(array);
      }
  }
    // Concat because there will be one element remaining from either left OR the right
    return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
  }

  array = mergeSorting(array);
}

const mergeSortAlgorithm = new AlgorithmObject("Merge Sort", mergeSort, "Theta ϴ(n log n)");
function mergeSortAlgorithmVisualization() { AlgorithmVisualization(mergeSortAlgorithm) }

// --------------------------------------
// Insertion Sort
// --------------------------------------

function insertionSort() {
  
  // Run Insertion Sort Algorithm
  for (let i = 1; i < len; i++) {
    setTimeout(() => {
      let key = array[i];
      let j = i - 1;
      // if previous value is greater than current value, swap
      while (j >= 0 && array[j] > key) {
        // Swap values
          array[j + 1] = array[j];
          j = j - 1;
          drawGraph(array);
          addTable(array);
      }
      array[j + 1] = key;
    }, animationDuration / 10);
  }
}

const insertionSortAlgorithm = new AlgorithmObject("Insertion Sort", insertionSort, "Big-O O(n squared), Omega Ω(n)");
function insertionSortAlgorithmVisualization() { AlgorithmVisualization(insertionSortAlgorithm) }