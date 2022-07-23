import * as d3 from 'd3';
import { n, array, len, colorReset } from './global';
import { addCard } from './timecard';
import { addTable } from './table';
import { drawGraph } from './graph';

// --------------------------------------
// Global Variables
// --------------------------------------

const animationDuration = 1000;
var animationStop = false;

// Stop previous animation from running otherwise setInterval won't stop and we'll have a memory-leak
export const stopPreviousAnimation = () => {
  animationStop = true;
}

// --------------------------------------
// Object Oriented Programming (OOP)
// --------------------------------------

function AlgorithmObject(name, algorithm, bigO, operationFormula) {
  // constructor functions
  this.name = name;
  this.algorithm = algorithm;
  this.bigO = bigO;
  this.operationFormula = operationFormula;
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

  // Commented out until I can solve the async/await puzzle to more accurately calculate runtime
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
  addCard(Algorithm.name, end, start, Algorithm.bigO, Algorithm.operationFormula);

}

const linearSearch = () => {

  // Obtain input from user
  let input = document.getElementById("linear-search-input").value;

  // Iterate over data
  for (let i = 0; i < n; i++){
    
    if (array[i] === parseInt(input, 10)) {

      // Color bar red if matched
      d3.selectAll(".bar")
          .select(`#bar_${array.indexOf(array[i])}`)
          .transition()
          .delay(function(d, i) { return i * 10; })
          .style("fill", "red");
      // Stop for loop
      break;
    }
    else {
      d3.selectAll(".bar")
          .select(`#bar_${i}`)
          .transition()
          .duration(1)
          .delay(function(d, i) { return i * 10; })
          .style("fill", "grey");
    }
  }
}

const linearSearchAlgorithm = new AlgorithmObject("Linear Search", linearSearch, "&#x39F(&#x192(n)), Ω(&#x192(1))", "n+1/2");
export function linearSearchAlgorithmVisualization() {AlgorithmVisualization(linearSearchAlgorithm) }

// --------------------------------------
// Binary Search
// --------------------------------------

const binarySearch = () => {

  // Obtain input from user
  let input = document.getElementById("binary-search-input").value;

  function colorGrey(position){
    d3.selectAll(".bar")
    .select(`#bar_${position}`)
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
          .select(`#bar_${array.indexOf(array[mid])}`)
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

const binarySearchAlgorithm = new AlgorithmObject("Binary Search", binarySearch, "&#x39F(&#x192(log n)), Ω(&#x192(1))", "log&#x2082n");
export function binarySearchAlgorithmVisualization() { AlgorithmVisualization(binarySearchAlgorithm) }

// --------------------------------------
// Bubble Sort
// --------------------------------------

const bubbleSort = () => {

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

          drawGraph(array, false);
          addTable(array);
        }

        if (animationStop === false){
          setTimeout(bubbleSorting, animationDuration);
        }
      }, animationDuration);
    }
  } while (swapped);
}

const bubbleSortAlgorithm = new AlgorithmObject("Bubble Sort", bubbleSort, "&#x39F(&#x192(n&#xb2)), Ω(&#x192(n))", "n(n-1)/2");
export function bubbleSortAlgorithmVisualization() { AlgorithmVisualization(bubbleSortAlgorithm) }

// --------------------------------------
// Selection Sort
// --------------------------------------

const selectionSort = () => {

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
          drawGraph(array, false);
          addTable(array);
        }
    }, animationDuration);
  }
}

const selectionSortAlgorithm = new AlgorithmObject("Selection Sort", selectionSort, "ϴ(&#x192(n&#xb2))", "n&#xb2/2+n/2");
export function selectionSortAlgorithmVisualization() { AlgorithmVisualization(selectionSortAlgorithm) }

// --------------------------------------
// Merge Sort
// --------------------------------------

const mergeSort = () => {

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
        drawGraph(resultArray, false);
        addTable(array);
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
        drawGraph(resultArray, false);
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

const mergeSortAlgorithm = new AlgorithmObject("Merge Sort", mergeSort, "ϴ(&#x192(n log n))", "6nlog&#x2082n + 6n");
export function mergeSortAlgorithmVisualization() { AlgorithmVisualization(mergeSortAlgorithm) }

// --------------------------------------
// Insertion Sort
// --------------------------------------

export const insertionSort = () => {

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
          drawGraph(array, false);
          addTable(array);
      }
      array[j + 1] = key;
    }, animationDuration / 10);
  }
}

const insertionSortAlgorithm = new AlgorithmObject("Insertion Sort", insertionSort, "&#x39F((&#x192(n&#xb2)), Ω(&#x192(n))","cn&#xb2/2−cn/2");
export function insertionSortAlgorithmVisualization() { AlgorithmVisualization(insertionSortAlgorithm) } 