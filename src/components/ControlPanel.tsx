import { n } from '../algorithms/global';
import { unsortReset, dataSizeReset } from '../algorithms/controls';
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
            <div>
              <button className={styles.buttonGroup} onClick={ () => {dataSizeReset(10); stopPreviousAnimation(); } }>10</button>
              <button className={styles.buttonGroup} onClick={ () => {dataSizeReset(100); stopPreviousAnimation(); } }>100</button>
              <button className={styles.buttonGroup} onClick={ () => {dataSizeReset(1000); stopPreviousAnimation(); } }>1000</button>
            </div>
          </li>
          <li>
            <form onSubmit={(event) => { event.preventDefault();}}>
              <input id="linear-search-input" type="number" min="0" max={n*10} aria-label="Search for number"></input>
              <button type="submit" onClick={ linearSearchAlgorithmVisualization }>Linear Search</button>
            </form>
          </li>
          <li>
            <form onSubmit={(event) => { event.preventDefault();}}>
              <input id="binary-search-input" type="number" min="0" max={n*10} aria-label="Search for number"></input>
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