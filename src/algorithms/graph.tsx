import * as d3 from 'd3';
import { n } from './global';

const width: number = 600;
const height: number = 600;
const barPadding: number = 1;
var barWidth: number = width / n - barPadding;

export const drawGraph = (array : number[], reset: boolean) => {

  // Create y-axis scale to ensure bars fit inside svg area and for calculating y and height attribute in rect
  var yScale: any = d3.scaleLinear()
                      .domain([0, Math.max(...array)])
                      .range([height, 0]);

  var xScale: any = d3.scaleLinear()
                      .domain([0, n])
                      .range([0, width]);

  var bars: any = d3.select("svg")
                    .attr("viewBox", `0 0 ${width} ${height}`)
                    .selectAll(".bar")
                    .data(array);

  var g: any = bars.enter()
                   .append("g")
                   .classed("bar", true);

  // Create a tooltip
  var tooltip: any = d3.select("#tooltip")
                       .append("div")
                       .attr("class", "tooltip");

  // Draw rectangles
  g.append("rect")
    .attr("transform", function(d: any, i: number) {return `translate(${(xScale(i) - (barWidth + barPadding))},0)`;})
    .attr("y", (d: any) => {return yScale(d);})
    .attr("height", (d: any) => {return height - yScale(d);})
    .attr("width", (d: any) => barWidth)
    .on("mouseover", function(event: any, d: any) {
      const[x, y] = d3.pointer(event, bars.node());
      tooltip.html(d)
              .style("left", `${x}px`)
              .style("top", `${y}px`)
              .style("opacity", 0.9)
              .transition()
              .duration(100);
    })
  .on("mouseleave", (d: any) => {
    d3.select(".tooltip")
      .transition()
      .duration(300)
      .style("opacity", 0);
  });

  // Remove old data
  bars.exit()
      .remove();

  // Update data
  if (reset === false) {
    // Standard behavior
    g.merge(bars)
    .select("rect")
    .attr("transform", function(d: any, i: number) {return `translate(${(xScale(i) - (barWidth + barPadding))},0)`;})
    .attr("y", (d: any) => {return yScale(d);})
    .attr("height", (d: any) => {return height - yScale(d);})
    .attr("width", (d: any) => barWidth)
    .attr("id", function(d: any, i: number) {return `bar_${i}`;});
  } else {
    // Pleasant step-wise animation
    g.merge(bars)
    .select("rect")
    .transition()
    .delay(function(d: any, i: number) { return i * 5; })
    .attr("transform", function(d: any, i: number) {return `translate(${(xScale(i) - (barWidth + barPadding))},0)`;})
    .attr("y", (d: any) => {return yScale(d);})
    .attr("height", (d: any) => {return height - yScale(d);})
    .attr("width", (d: any) => barWidth)
    .attr("id", function(d: any, i: number) {return `bar_${i}`;});
  }
}