import * as d3 from 'd3';

export const addTable = (array: number[]) => {

  var table: any = d3.select("#data")
                .selectAll("td")
                .data(array);

  var g = table.enter()
               .append("td");

  g.text((d: any) => {return d;});

  // Erase any old data from table
  table.exit()
       .remove();

  g.merge(table)
    .text((d: any) => {return d;});
}