import * as d3 from 'd3';

// Create card to display runtime, Big-O information, and formula for operation count
export function addCard(algorithm: any, end: number, start: number, bigO: string, operationFormula: string){
  d3.select("#runtimes")
  .append("div")
  .html(
    `<div class="card card-sizing">
      <div class="card-body">
        <h3 class="card-header"> ${algorithm} Runtime</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h4>Asymptotic Analysis</h4>
              <p>${bigO}</p>
            </li>
            <li class="list-group-item">
              <h4>Runtime Formula</h4>
              <p>${operationFormula}</p>
            </li>
            <li class="list-group-item">
              <h4>Javascript Execution Time</h4>
              <p>${end - start} ms</p>
            </li>
          </ul>
      </div>
    </div>`
);}