import * as d3 from 'd3';

// Set initial data set size
export var n: number = 100;

// Create initial random number array
export var array: number[] = [];
for (var i = 0; i < n; i++){
  array.push(getRandomInt(n*10));
}
export var len: number = array.length;

// Generate random numbers
export function getRandomInt(max: number):number {
  return Math.floor(Math.random() * Math.floor(max));
}

// Be able to change initial data set size
export function changeDataSet(dataSet: number) {
  n = dataSet;
  array = [];
  for (var i = 0; i < n; i++){
    array.push(getRandomInt(n*10));
  }
  len = array.length;
}

// Reset color of bars
export function colorReset() {
  for (var i = 0; i < len; i++){
    d3.select(`#bar_${i}`)
        .style("fill", "white");
  }
}