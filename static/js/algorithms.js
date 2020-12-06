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

function newData() {
  array = [];
  // Create random number array
  for (var i = 0; i < n; i++){
    array.push(getRandomInt(1000));
  }
  console.log(array);
}

// --------------------------------------
// Draw graphs
// --------------------------------------

// Calculate width of individual bars
var barWidth = width / n - barPadding;

// Create y-axis scale to ensure bars fit inside svg area and for calculating y and height attribute in rect
var yScale = d3.scaleLinear()
               .domain([0, Math.max(...array)])
               .range([height, 0]);
// Checking output of yScale
// for (var i = 0; i < n; i++){
//   console.log("height - yScale: ", height - yScale(array[i]));
// }

// Create bars variable
var bars = d3.select("#linear-search")
                .attr("width", width)
                .attr("height", height)
              .selectAll(".bar")
              .data(array)
              .enter()
              .append("g")
                .classed("bar", true)
console.log("bars: ", bars);

// Draw rectangles
bars
  .append("rect")
    .attr("x", (d, i) => {return (barWidth + barPadding) * i})
    .attr("y", (d) => {return height - yScale(d)})
    .attr("height", (d) => {return yScale(d)})
    .attr("width", (d) => barWidth);


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
    .text(`Execution time: ${end - start} ms`);

});


// --------------------------------------
// Binary Search
// --------------------------------------



// --------------------------------------
// Bubble Sort
// --------------------------------------



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