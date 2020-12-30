// --------------------------------------
// Global Variables
// --------------------------------------
const width = 600;
const height = 600;
const padding = 50;
const barPadding = 1;
const svg = d3.select("svg")
              .attr("width", width)
              .attr("height", height);
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
console.log(array);

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
    `<div class="card mx-2" style="width: 18rem;">
      <div class="card-body">
        <div class="card-header"> ${algorithm} Javascript Execution Time</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> ${end - start} ms </li>
            <li class="list-group-item"> ${bigO} </li>
          </ul>
      </div>
    </div>`
)}

// Stop previous animation from running because setInterval won't stop otherwise
function stopPreviousAnimation() {
  animationStop = true;
  console.log("any previous animation should stop, animationStop = ", animationStop)
}

// Initialize first graph
d3.select(window).on("load", drawGraph(array));

// Initialize first data table
d3.select(window).on("load", addTable(array));

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
                .attr("width", width)
                .attr("height", height)
                .selectAll(".bar")
                .data(array)

var g = bars
                .enter()
                .append("g")
                  .classed("bar", true)

// Create a tooltip
var tooltip = d3.select("#tooltip")
                .append("div")
                .style("opacity", 0)
                .attr("class", "tooltip")

// Draw rectangles
g.append("rect")
  .attr("transform", function(d, i) {return "translate(" + (xScale(i) - (barWidth + barPadding)) + ",0)"})
  .attr("y", (d) => {return yScale(d)})
  .attr("height", (d) => {return height - yScale(d)})
  .attr("width", (d) => barWidth)
  .on("mousemove", (d, i) => {tooltip.transition().duration(100).style("opacity", .9);      
  tooltip.html(d).style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY) + "px")})
  .on("mouseleave", d => {tooltip.transition() .duration(300) .style("opacity", 0)});

  // .attr("x", (d, i) => {return (barWidth + barPadding) * i})

// Remove old data
bars
.exit()
.remove();

// Update data
g.merge(bars)
  .select("rect")
  .attr("transform", function(d, i) {return "translate(" + (xScale(i) - (barWidth + barPadding)) + ",0)"})
  .attr("y", (d) => {return yScale(d)})
  .attr("height", (d) => {return height - yScale(d)})
  .attr("width", (d) => barWidth)
  .attr("id", function(d, i) {return 'bar_' + i})
}


// --------------------------------------
// Draw Graph (more visually appealing)
// --------------------------------------

function sexyDrawGraph(array){
// Create y-axis scale to ensure bars fit inside svg area and for calculating y and height attribute in rect
var yScale = d3.scaleLinear()
               .domain([0, Math.max(...array)])
               .range([height, 0]);

var xScale = d3.scaleLinear()
                .domain([0, n])
                .range([0, width]);

var bars = d3.select("svg")
                .attr("width", width)
                .attr("height", height)
                .selectAll(".bar")
                .data(array)

var g = bars
                .enter()
                .append("g")
                  .classed("bar", true)

// Create a tooltip
var tooltip = d3.select("#tooltip")
                .append("div")
                .style("opacity", 0)
                .attr("class", "tooltip")

// Draw rectangles
g.append("rect")
  .attr("transform", function(d, i) {return "translate(" + (xScale(i) - (barWidth + barPadding)) + ",0)"})
  .attr("y", (d) => {return yScale(d)})
  .attr("height", (d) => {return height - yScale(d)})
  .attr("width", (d) => barWidth)
  .on("mousemove", (d, i) => {tooltip.transition().duration(100).style("opacity", .9);      
  tooltip.html(d).style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY) + "px")})
  .on("mouseleave", d => {tooltip.transition() .duration(300) .style("opacity", 0)});

// Remove old data
bars
.exit()
.remove();

// Update data
g.merge(bars)
  .select("rect")
  .transition()
  .delay(function(d, i) { return i * 5; })
  .attr("transform", function(d, i) {return "translate(" + (xScale(i) - (barWidth + barPadding)) + ",0)"})
  .attr("y", (d) => {return yScale(d)})
  .attr("height", (d) => {return height - yScale(d)})
  .attr("width", (d) => barWidth)
  .attr("id", function(d, i) {return 'bar_' + i})
}

// --------------------------------------
// Data Table
// --------------------------------------

function addTable(array){

  table = d3.select("#data")
            .selectAll("td")
            .data(array)

  var g = table
            .enter()
            .append("td")

  g.text((d) => {return d})

  // Erase any old data from table
  table
      .exit()
      .remove();

  g.merge(table)
      .text((d) => {return d})
}


// --------------------------------------
// Unsort
// --------------------------------------

d3.select("#unsort").on("click", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

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

  colorReset();
  sexyDrawGraph(array);
  addTable(array);

  console.log("The array values shouldn't change, only their positions: ", array);

});

// --------------------------------------
// New Data
// --------------------------------------

d3.select("#new-data").on("click", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

  array = [];

  for (var i = 0; i < n; i++){
    array.push(getRandomInt(1000));
  }

  colorReset();
  sexyDrawGraph(array);
  addTable(array);

  console.log(array);
});

// --------------------------------------
// Linear Search
// --------------------------------------

d3.select("#linear-search-form").on("submit", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

  // Reset color of bars
  colorReset()

  // Obtain input from user
  let input = document.getElementById("linear-search-input").value

  // Begin run-time stopwatch
  let start = window.performance.now();

  // Iterate over data
  for (let i = 0; i < n; i++){
    // Convert index number
    function getIndex(num) {return num == parseInt(array[i])}
    
    if (array[i] === parseInt(input)) {

      // Color bar red if matched
      d3.selectAll(".bar")
          .select("#bar_" + array.findIndex(getIndex))
          .transition()
          .delay(function(d, i) { return i * 10; })
          .style("fill", "red");

      console.log("found ", input);

      // Stop for loop
      break
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

  // End run-time stopwatch
  let end = window.performance.now();

  // Append new card with runtime
  linearSearch = "Linear Search"
  bigO = "Big-O O(n), Omega Ω(1)"
  addCard(linearSearch, end, start, bigO);

});


// --------------------------------------
// Binary Search
// --------------------------------------

d3.select("#binary-search-form").on("submit", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

  // Reset color of bars
  colorReset()

  // Obtain input from user
  let input = document.getElementById("binary-search-input").value

  // Begin run-time stopwatch
  let start = window.performance.now();

  let arrayStart = 0, arrayEnd = len - 1, i = 0;     
  // Iterate while arrayStart is greater than arrayEnd 
  while (i < n){
    // Find the mid index 
    let mid = Math.floor((arrayStart + arrayEnd)/2); 

    // If element is present at mid, return True 
    if (array[mid] === parseInt(input)){
        // Convert insput string to number
        function getInput(num) {return num == parseInt(input)}

      // Color bar red if matched
      d3.selectAll(".bar")
          .select("#bar_" + array.findIndex(getInput))
          .style("fill", "red");
      
      // Stop while loop
      i = n;
      console.log("found ", input)
    }

    // Else look in left or right half accordingly 
    else if (array[mid] < parseInt(input)){
      // Look right of sorted array
      arrayStart = mid + 1;
      d3.selectAll(".bar")
          .select("#bar_" + arrayStart)
          .style("fill", "grey");

      // Increment i to prevent while loop
      i++;

      // console.log("arrayStart", arrayStart)
    }
    else {
      // Look left of sorted array
      arrayEnd = mid - 1;
      d3.selectAll(".bar")
          .select("#bar_" + arrayEnd)
          .style("fill", "grey");
        
      // Increment i to prevent while loop
      i++;

      // console.log("arrayEnd", arrayEnd)
    }
  }
   
  // End run-time stopwatch
  let end = window.performance.now();

  // Append new card with runtime
  binarySearch = "Binary Search"
  bigO = "Big-O O(log n), Omega Ω(1)"
  addCard(binarySearch, end, start, bigO);
  
  drawGraph(array)
  });

// --------------------------------------
// Bubble Sort
// --------------------------------------

d3.select("#bubble-sort").on("click", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

  // Reset color of bars
  colorReset()

  // Allow recursive animation
  animationStop = false;

  // Begin run-time stopwatch
  let start = window.performance.now();

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      // Recursive setTimeout animation
      animation = setTimeout(function bubbleSorting() {

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
      }, animationDuration)
    }
  } while (swapped);

  // End run-time stopwatch
  let end = window.performance.now();

  // Append new card with runtime
  bubbleSort = "Bubble Sort"
  bigO = "Big-O O(n squared), Omega Ω(n)"
  addCard(bubbleSort, end, start, bigO);

});

// --------------------------------------
// Selection Sort
// --------------------------------------

d3.select("#selection-sort").on("click", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

  // Reset color of bars
  colorReset()

  // Begin run-time stopwatch
  let start = window.performance.now();
  // Run Selection Sort Algorithm
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
    }, animationDuration)
    }

  // End run-time stopwatch
  let end = window.performance.now();

  // Append new card with runtime
  selectionSort = "Selection Sort"
  bigO = "Theta ϴ(n squared)"
  addCard(selectionSort, end, start, bigO);
});


// --------------------------------------
// Merge Sort
// --------------------------------------

d3.select("#merge-sort").on("click", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

  // Reset color of bars
  colorReset()

  // Begin run-time stopwatch
  let start = window.performance.now();

  function mergeSort (array) {
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
    return merge(mergeSort(left), mergeSort(right));
  }

  // Merge the two arrays: left and right
  function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    // Concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
        drawGraph(resultArray)
        addTable(array);
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
        drawGraph(resultArray)
        addTable(array);
      }
  }
    // Concat because there will be one element remaining from either left OR the right
    return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
  }

  array = mergeSort(array);

  // End run-time stopwatch
  let end = window.performance.now();

  // Append new card with runtime
  mergeSorted = "Merge Sort"
  bigO = "Theta ϴ(n log n)"
  addCard(mergeSorted, end, start, bigO);
});

// --------------------------------------
// Insertion Sort
// --------------------------------------

d3.select("#insertion-sort").on("click", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

  // Reset color of bars
  colorReset()

  // Begin run-time stopwatch
  let start = window.performance.now();

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
    }, animationDuration / 10)
  }

  // End run-time stopwatch
  let end = window.performance.now();

  // Append new card with runtime
  insertionSort = "Insertion Sort"
  bigO = "Big-O O(n squared), Omega Ω(n)"
  addCard(insertionSort, end, start, bigO);
});