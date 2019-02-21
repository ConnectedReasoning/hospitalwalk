
var lineCoordinates = [
  { x: 0,   y: 900 },
  { x: 410, y: 900 },
  { x: 435, y: 650 },
  { x: 200, y: 650 },
  { x: 450, y: 650 },
  { x: 450, y: 550 },
  { x: 300, y: 530 },
  { x: 300, y: 465 },
  { x: 150, y: 450 },
  { x: 150, y: 550 },
  { x: 150, y: 425 },
  { x: 150, y: 450 },
  { x: 300, y: 450 },
  { x: 300, y: 525 },
  { x: 650, y: 475 },
  { x: 650, y: 300 },
  { x: 450, y: 250 },
  { x: 425, y: 675 },
  { x: 405, y: 875 },
  { x:   0, y: 900 },
] 

var svgContainer = d3.select("#root").select("#floor");
var person = d3.select("#root").select('#floor').select('#person');
var duration_miliseconds = 30000;

var lineTween = d3.line()
  .x(function(d) { return d.x; })
  .y(function(d) { return d.y; })
  .curve(d3.curveCardinal);

var personTween = function(path){
  var length = path.node().getTotalLength(); // Get the length of the path
  var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length 
  return function(t){
    var point = path.node().getPointAtLength(r(t)); // Get the next point along the path
    var newX = point.x - 20;
    var newY = point.y - 20;
    d3.select(this) // Select the item
     .attr('transform','translate(' + newX + ', ' + newY + ') scale(.4 .4)')
  }
}
var linePath = svgContainer.append("path")
  .attr("d", lineTween(lineCoordinates))
  .attr("stroke", "magenta")
  .attr("stroke-width", 5)
  .attr("fill", "none");

var totalLength = linePath.node().getTotalLength();

linePath
  .attr("stroke-dasharray", totalLength + " " + totalLength)
  .attr("stroke-dashoffset", totalLength)
  .transition()
  .duration(duration_miliseconds)
  .ease(d3.easeLinear)
  .attr("stroke-dashoffset", 0);

person.transition()
  .duration(duration_miliseconds)
  .ease(d3.easeLinear)
  .tween("personTween", function(){return personTween(linePath)})
