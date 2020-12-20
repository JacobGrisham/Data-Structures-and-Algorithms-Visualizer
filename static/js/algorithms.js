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

// --------------------------------------
// Global Functions
// --------------------------------------
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
  for (var i = 0; i < n; i++){
    d3.selectAll(".bar")
          .select("#bar_" + [i])
          .style("fill", "white");
  }
}

// --------------------------------------
// Draw Graph
// --------------------------------------

function drawGraph(array) {

// Create y-axis scale to ensure bars fit inside svg area and for calculating y and height attribute in rect
var yScale = d3.scaleLinear()
               .domain([0, Math.max(...array)])
               .range([height, 0]);
// Checking output of yScale
// for (var i = 0; i < n; i++){
//   console.log("height - yScale: ", height - yScale(array[i]));
// }

// Create bars variable
var bars = d3.select("svg")
                .attr("width", width)
                .attr("height", height)
              .selectAll(".bar")
              .data(array)

var g = bars
          .enter()
          .append("g")
            .classed("bar", true)

bars
  .exit()
  .remove();

// Draw rectangles
g.append("rect")
  .attr("x", (d, i) => {return (barWidth + barPadding) * i})
  .attr("y", (d) => {return yScale(d)})
  .attr("height", (d) => {return height - yScale(d)})
  .attr("width", (d) => barWidth);

g.merge(bars)
  .select("rect")
  .attr("x", (d, i) => {return (barWidth + barPadding) * i})
  .attr("y", (d) => {return yScale(d)})
  .attr("height", (d) => {return height - yScale(d)})
  .attr("width", (d) => barWidth)
  .attr("id", function(d, i) {return 'bar_' + i});
}

d3.select(window).on("load", drawGraph(array));

// --------------------------------------
// Draw New Graph
// --------------------------------------

// d3.select("#new-data").on("click", () => {

//   newArray = [];
//   // Create random number array
//   for (var i = 0; i < n; i++){
//     newArray.push(getRandomInt(1000));
//   }
//   console.log(newArray);

//   d3.select("svg")
//     .selectAll(".bar")
//     .data(newArray)
//     .enter()
//     .append("g")
//       classed("bar", true)
//     .append("rect")
//       .attr("x", (d, i) => {return (barWidth + barPadding) * i})
//       .attr("y", (d) => {return height - yScale(d)})
//       .attr("height", (d) => {return yScale(d)})
//       .attr("width", (d) => barWidth);

//   // General Update Pattern: remove old data
//   d3.select("new-data").remove();
// });


// --------------------------------------
// Unsort
// --------------------------------------

d3.select("#unsort").on("click", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

  // Fisher-Yates Shuffling
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  drawGraph(array)

  console.log("The array values shouldn't change, only their positions: ", array);

  return array;

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

  // Reset color of bars
  colorReset()

  drawGraph(array);

  console.log(array);

  return array;
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
          .style("fill", "red");
      
      console.log("found ", input);

      // Stop for loop
      break
    }
    else {
      d3.selectAll(".bar")
          .select("#bar_" + i)
          .style("fill", "grey");
      console.log(`array[i]`, array[i])
    }
  }

  // End run-time stopwatch
  let end = window.performance.now();
  d3.select("body").append("div")
    .text(`Linear Search Execution time: ${end - start} ms. Big-O O(n), Omega Ω(1)`);

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

      // Check value in console
      console.log("arrayStart", arrayStart)
    }
    else {
      // Look left of sorted array
      arrayEnd = mid - 1;
      d3.selectAll(".bar")
          .select("#bar_" + arrayEnd)
          .style("fill", "grey");
        
      // Increment i to prevent while loop
      i++;

      // Check value in console
      console.log("arrayEnd", arrayEnd)
    }
  }
   
  // End run-time stopwatch
  let end = window.performance.now();
  d3.select("body").append("div")
    .text(`Binary Search Execution time: ${end - start} ms. Big-O O(log n), Omega Ω(1)`);
  
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

  // Begin run-time stopwatch
  let start = window.performance.now();

  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (array[i] > array[i + 1]) {
        setTimeout (() => {
          let first = array[i];
          console.log("first", first)
          array[i + 1] = first;
          d3.selectAll(".bar")
          .select("#bar_" + [i])
          .style("fill", "blue");
        }, (i * 100))
        setTimeout(() => {
          let second = array[i + 1];
          console.log("second", second)
          array[i] = second;
          d3.selectAll(".bar")
          .select("#bar_" + [i + 1])
          .style("fill", "green");
        }, (i + 1) * 100)
        swapped = true;
        drawGraph(array)
      }
    }
  } while (swapped);

  // End run-time stopwatch
  let end = window.performance.now();
  d3.select("body").append("div")
    .text(`Bubble Sort Execution time: ${end - start} ms. Big-O O(n squared), Omega Ω(n)`);
  
  console.log(array);
  // for (let i = 0; i < n; i++) {
  // d3.selectAll(".bar")
  //   .select("#bar_" + [i])
  //     .style("fill", "white");
  // }
  return array;
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
  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (array[min] > array[j]) {
              min = j;
          }
      }
      if (min !== i) {
          let tmp = array[i];
          array[i] = array[min];
          array[min] = tmp;
      }
  }
  console.log(array);

  // End run-time stopwatch
  let end = window.performance.now();
  d3.select("body").append("div")
    .text(`Insertion Sort Execution time: ${end - start} ms. Theta ϴ(n squared)`);

  drawGraph(array)
  return array;
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

  function merge(left, right){
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    console.log(arr)
    console.log(left)
    console.log(right)

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
  }
  
  function mergeSort(array) {
    let half = array.length / 2
    console.log(half)
  
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    let left = array.splice(0, half)
    console.log(left)

    return merge(mergeSort(left),mergeSort(array))
  }

  mergeSort(array);

  console.log(array)

  // End run-time stopwatch
  let end = window.performance.now();
  d3.select("body").append("div")
    .text(`Merge Sort Execution time: ${end - start} ms. Theta ϴ(n log n)`);
  
  drawGraph(array)

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
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          j = j - 1;
      }
      array[j + 1] = key;
  }
  console.log(array);

  // End run-time stopwatch
  let end = window.performance.now();
  d3.select("body").append("div")
    .text(`Insertion Sort Execution time: ${end - start} ms. Big-O O(1), Omega Ω(n)`);
  
  drawGraph(array)

  return array;
});