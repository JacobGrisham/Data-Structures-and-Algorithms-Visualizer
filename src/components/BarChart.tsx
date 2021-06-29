import React from 'react';
import { useD3 } from '../hooks/useD3';
import { n, array } from "../algorithms/global";
import { drawGraph } from '../algorithms/graph';
import { addTable } from '../algorithms/table';


export default function BarChart() {
  const ref = useD3(
    () => {
      drawGraph(array, false);
      addTable(array);
      },
      [n]
    )

  return (
    <div className="container">
      <svg ref={ref}></svg>
    </div>
  )
}