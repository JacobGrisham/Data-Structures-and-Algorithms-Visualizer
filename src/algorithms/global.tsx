import * as d3 from 'd3';
export var array: number[] = [];
export const n: number = 100;

// Create initial random number array
for (var i = 0; i < n; i++){
  array.push(getRandomInt(1000));
}
export var len: number = array.length;

// Random number generator
export function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Reset color of bars
export function colorReset() {
  for (var i = 0; i < len; i++){
    d3.select(`#bar_${i}`)
        .style("fill", "white");
  }
}