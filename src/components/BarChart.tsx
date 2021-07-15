import React from 'react';
import { useD3 } from '../hooks/useD3';
import { n, array } from "../algorithms/global";
import { drawGraph } from '../algorithms/graph';
import { addTable } from '../algorithms/table';
import styles from '../assets/styles/graph.module.scss';


export default function BarChart() {
  const ref = useD3(
    () => {
      drawGraph(array, false);
      addTable(array);
      },
      [n]
    )

  return (
    <section>
      <svg ref={ref} className={styles.graph}></svg>
    </section>
  )
}