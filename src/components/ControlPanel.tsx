import React from 'react';
import { unsortReset, newDataReset } from '../algorithms/controls';
import { linearSearchAlgorithmVisualization, binarySearchAlgorithmVisualization, bubbleSortAlgorithmVisualization, selectionSortAlgorithmVisualization, mergeSortAlgorithmVisualization, insertionSortAlgorithmVisualization } from '../algorithms/algorithmsFn';

export default function ControlPanel() {

  return (
    <nav className="navbar navbar-expand-xl navbar-dark">

      <a href="/"className="navbar-brand"><button className="btn btn-outline-light">Home</button></a>
      <button className="navbar-toggler btn-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
        <ul className="navbar-nav flex-wrap justify-content-center justify-content-md-end">
          <li className="nav-item m-1">
            <button onClick={ unsortReset } className="btn btn-outline-light">Unsort</button>
          </li>
          <li className="nav-item m-1">
            <button onClick={ newDataReset } className="btn btn-outline-light">New Data</button>
          </li>
          <li className="nav-item m-1">
            <form className="form-inline">
              <input id="linear-search-input" type="number" min="0" max="1000" aria-label="Search for number"></input>
              <input className="btn btn-outline-light mx-1" type="button" onClick={ linearSearchAlgorithmVisualization }value="Linear Search"></input>
            </form>
          </li>
          <li className="nav-item m-1">
            <form className="form-inline">
              <input id="binary-search-input" type="number" min="0" max="1000" aria-label="Search for number"></input>
              <input className="btn btn-outline-light mx-1" type="button" onClick={ binarySearchAlgorithmVisualization } value="Binary Search"></input>
            </form>
          </li>
          <li className="nav-item m-1">
            <button onClick={ bubbleSortAlgorithmVisualization } className="btn btn-outline-light">Bubble Sort</button>
          </li>
          <li className="nav-item m-1">
            <button onClick={ selectionSortAlgorithmVisualization } className="btn btn-outline-light">Selection Sort</button>
          </li>
          <li className="nav-item m-1">
            <button onClick={ mergeSortAlgorithmVisualization } className="btn btn-outline-light">Merge Sort</button>
          </li>
          <li className="nav-item m-1">
            <button onClick={ insertionSortAlgorithmVisualization } className="btn btn-outline-light">Insertion Sort</button>
          </li>
        </ul>
      </div>

    </nav>
  );
}