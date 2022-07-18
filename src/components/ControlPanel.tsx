import React from 'react';
import { unsortReset, newDataReset } from '../algorithms/controls';
import { stopPreviousAnimation, linearSearchAlgorithmVisualization, binarySearchAlgorithmVisualization, bubbleSortAlgorithmVisualization, selectionSortAlgorithmVisualization, mergeSortAlgorithmVisualization, insertionSortAlgorithmVisualization } from '../algorithms/algorithmsFn';
import styles from '../assets/styles/navbar.module.scss';

export default function ControlPanel() {

  return (
    <nav className={styles.navbar}>
      
        <ul>
          <li>
            <button onClick={ () => {unsortReset(); stopPreviousAnimation(); } }>Unsort</button>
          </li>
          <li>
            <button onClick={ () => {newDataReset(); stopPreviousAnimation(); } }>New Data</button>
          </li>
          <li>
            <form onSubmit={(event) => { event.preventDefault();}}>
              <input id="linear-search-input" type="number" min="0" max="1000" aria-label="Search for number"></input>
              <button type="submit" onClick={ linearSearchAlgorithmVisualization }>Linear Search</button>
            </form>
          </li>
          <li>
            <form onSubmit={(event) => { event.preventDefault();}}>
              <input id="binary-search-input" type="number" min="0" max="1000" aria-label="Search for number"></input>
              <button type="submit" onClick={ binarySearchAlgorithmVisualization }>Binary Search</button>
            </form>
          </li>
          <li>
            <button onClick={ bubbleSortAlgorithmVisualization }>Bubble Sort</button>
          </li>
          <li>
            <button onClick={ selectionSortAlgorithmVisualization }>Selection Sort</button>
          </li>
          <li>
            <button onClick={ mergeSortAlgorithmVisualization }>Merge Sort</button>
          </li>
          <li>
            <button onClick={ insertionSortAlgorithmVisualization }>Insertion Sort</button>
          </li>
        </ul>

    </nav>
  );
}