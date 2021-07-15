import * as d3 from 'd3';

// Create card to display runtime and Big-O information
export function addCard(algorithm: any, end: number, start: number, bigO: string){
  d3.select("#runtimes")
  .append("div")
  .html(
    `<div class="card card-sizing">
      <div class="card-body">
        <div class="card-header"> ${algorithm} Javascript Execution Time</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"> ${end - start} ms </li>
            <li class="list-group-item"> ${bigO} </li>
          </ul>
      </div>
    </div>`
);}