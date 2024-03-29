import { n, array, colorReset, getRandomInt, changeDataSet } from './global';
import { drawGraph } from './graph';
import { addTable } from './table';

// --------------------------------------
// Functional Programming
// --------------------------------------

export function reset(method?: any) {
  method();
  colorReset();
  drawGraph(array, true);
  addTable(array);
}

// --------------------------------------
// Unsort
// --------------------------------------

const unsort: any = () => {

  // Fisher-Yates Shuffling
  var m: number = array.length, t, i;

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

export function unsortReset() { reset(unsort) }

// --------------------------------------
// New Data
// --------------------------------------

const newData: any = () => {

  for (var j: number = 0; j < n; j++){
    array.pop();
  }

  for (var i: number = 0; i < n; i++){
    array.push(getRandomInt(1000));
  }
}

export function newDataReset() { reset(newData) }

// --------------------------------------
// Change Data Set Size
// --------------------------------------

export function dataSizeReset(dataSet: number) {
  changeDataSet(dataSet);
  colorReset();
  drawGraph(array, false);
  addTable(array);
}