// --------------------------------------
// Global Variables
// --------------------------------------
var width = 600;
var height = 600;
var padding = 50;
var barPadding = 1;
var svg = d3.select("svg")
              .attr("width", width)
              .attr("height", height);
var array = [];
n = 100;
var barWidth = width / n - barPadding;

// --------------------------------------
// Global Functions
// --------------------------------------
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Create random number array
for (var i = 0; i < n; i++){
  array.push(getRandomInt(1000));
}
console.log(array);

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
  .attr("width", (d) => barWidth);
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
// Linear Search
// --------------------------------------

d3.select("form").on("submit", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

  // Obtain input from user
  var input = document.getElementById("linear-search-input").value

  function getInput(num) {return num == parseInt(input)}
  // Color bar blue if matched
  d3.selectAll(".bar")
      .style("fill", function(_,idx) {
        return idx === array.findIndex(getInput) ? "red" : "grey";
      });

  // Begin run-time stopwatch
  var start = window.performance.now();

  // Iterate over data
  for (var i = 0; i < n; i++){
    
    if (array[i] == input) {
      console.log("found ", input);
      break
    }
    else {
      console.log("not found ", input);
    }
  }

  // End run-time stopwatch
  var end = window.performance.now();
  d3.select("body").append("div")
    .text(`Linear Search Execution time: ${end - start} ms`);

});


// --------------------------------------
// Binary Search
// --------------------------------------



// --------------------------------------
// Bubble Sort
// --------------------------------------

d3.select("#bubble-sort").on("click", () => {
  // Prevent page from reloading
  d3.event.preventDefault();

  var yScale = d3.scaleLinear()
                  .domain([0, Math.max(...array)])
                  .range([height, 0]);

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

  g.merge(bars)
    .select("rect")
    .attr("x", (d, i) => {return (barWidth + barPadding) * i})
    .attr("y", (d) => {return yScale(d)})
    .attr("height", (d) => {return height - yScale(d)})
    .attr("width", (d) => barWidth);

  // Begin run-time stopwatch
  var start = window.performance.now();

  let len = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (array[i] > array[i + 1]) {
        let first = array[i];
        let second = array[i + 1];
        array[i] = second;
        array[i + 1] = first;
        swapped = true;
      }
    }
  } while (swapped);
  console.log(array);

  // End run-time stopwatch
  var end = window.performance.now();
  d3.select("body").append("div")
    .text(`Bubble Sort Execution time: ${end - start} ms`);
  
    drawGraph(array)
  return array;
});

// --------------------------------------
// Selection Sort
// --------------------------------------



// --------------------------------------
// Merge Sort
// --------------------------------------
function mergeSort() {

  const middleIdx = Math.floor(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, middleIdx));
  const secondHalf = mergeSort(array.slice(middleIdx));
  const sortedArray = [];
  let i = 0, j = 0;
  while (i < firstHalf.length && secondHalf.length){
    if (firstHalf[i] < secondHalf[j]) {
      sortedArray.push(firstHalf[i++]);
    } else {
      sortedArray.push(secondHalf[j++]);
    }
  }
  while (i < firstHalf.length) sortedArray.push(firstHalf([i++]));
  while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
  console.log(sort)
  return sortedArray;
}
// --------------------------------------
// Insertion Sort
// --------------------------------------