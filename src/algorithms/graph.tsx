import * as d3 from 'd3';
import { n } from './global';

const width: number = 600;
const height: number = 600;
const barPadding: number = 1;
const svg: any = d3.select("svg")
                .attr("viewBox", `0 0 ${width} ${height}`)
var barWidth: number = width / n - barPadding;

export const drawGraph = (array : number[]) => {

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
                       .style("opacity", 0)
                       .attr("class", "tooltip");

  // Draw rectangles
  g.append("rect")
    .attr("transform", function(d: any, i: any) {return `translate(${(xScale(i) - (barWidth + barPadding))},0)`;})
    .attr("y", (d: any) => {return yScale(d);})
    .attr("height", (d: any) => {return height - yScale(d);})
    .attr("width", (d: any) => barWidth)
    // .on("mousemove", (d: any, i: any) => {tooltip.transition().duration(100).style("opacity", 0.9);
    // tooltip.html(event, d).style("left", (event.pageX) + "px").style("top", (event.pageY) + "px");})
    // .on("mouseleave", (d: any) => {tooltip.transition().duration(300).style("opacity", 0);});

    // .attr("x", (d, i) => {return (barWidth + barPadding) * i})

  // Remove old data
  bars.exit()
      .remove();

  // Update data
  g.merge(bars)
    .select("rect")
    .attr("transform", function(d: any, i: any) {return `translate(${(xScale(i) - (barWidth + barPadding))},0)`;})
    .attr("y", (d: any) => {return yScale(d);})
    .attr("height", (d: any) => {return height - yScale(d);})
    .attr("width", (d: any) => barWidth)
    .attr("id", function(d: any, i: any) {return `bar_${i}`;});

    // Pleasant animation
    // Add this to g.merge(bars) when clicking on Unsort or New Data
    // .transition()
    // .delay(function(d, i) { return i * 5; })
}