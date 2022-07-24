import React, { useState } from 'react';
import { n } from '../algorithms/global';
import { unsortReset, dataSizeReset } from '../algorithms/controls';
import { stopPreviousAnimation, linearSearchAlgorithmVisualization, binarySearchAlgorithmVisualization, bubbleSortAlgorithmVisualization, selectionSortAlgorithmVisualization, mergeSortAlgorithmVisualization, insertionSortAlgorithmVisualization } from '../algorithms/algorithmsFn';
import styles from '../assets/styles/navbar.module.scss';

export default function ControlPanel() {

  const dataSetSizes: number[] = [10,100,1000];
  const algorithmSortFunctions = [
    {
      "name": "Bubble Sort",
      "function": bubbleSortAlgorithmVisualization
    },
    {
      "name": "Selection Sort",
      "function": selectionSortAlgorithmVisualization
    },
    {
      "name": "Merge Sort",
      "function": mergeSortAlgorithmVisualization
    },
        {
      "name": "Insertion Sort",
      "function": insertionSortAlgorithmVisualization
    },
  ]
  const algorithmSearchFunctions = [
    {
      "name": "Linear Search",
      "function": linearSearchAlgorithmVisualization,
      "id": "linear-search-input"
    },
    {
      "name": "Binary Search",
      "function": binarySearchAlgorithmVisualization,
      "id": "binary-search-input"
    }
  ]

  const [active, setActive] = useState(1);

  return (
    <nav className={styles.navbar}>
      
        <ul>
          <li>
            <button onClick={ () => {unsortReset(); stopPreviousAnimation(); } }>Unsort</button>
          </li>
          <li>
            <div className={styles.buttonGroup}>
              {dataSetSizes.map((size, index) => {
                return <button
                        className={active === index ? styles.active : ''}
                        onClick={() => {dataSizeReset(size); stopPreviousAnimation(); setActive(index)}}
                        key={ index }>
                          {size}
                        </button>;
              })}
            </div>
          </li>
          {algorithmSearchFunctions.map((algorithm) => {
            return <li>
                    <form key={ algorithm.id } onSubmit={(event) => { event.preventDefault();}}>
                      <input id={algorithm.id} type="number" min="0" max={n*10} aria-label="Search for number"></input>
                      <button type="submit" onClick={ algorithm.function }>{algorithm.name}</button>
                    </form>
                  </li>
          })}
          {algorithmSortFunctions.map((algorithm, index) => {
            return <li>
                    <button key={ index } onClick={ algorithm.function }>{algorithm.name}</button>
                  </li>
          })}
        </ul>
    </nav>
  );
}