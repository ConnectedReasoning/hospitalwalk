
var line_path = [
  { x: 0, y:  950 },
  { x: 450, y:  950 },
  { x: 475, y: -275+950 },
  { x: 200, y: -275+950 },
  { x: 475, y: -275+950 },
  { x: 475, y: -375+950 },
  { x: 300, y: -390+950 },
  { x: 300, y: -485+950 },
  { x: 150, y: -500+950 },
  { x: 150, y: -400+950 },
  { x: 150, y: -525+950 },
  { x: 150, y: -500+950 },
  { x: 300, y: -500+950 },
  { x: 300, y: -390+950 },
  { x: 725, y: -390+950 },
  { x: 725, y: -700+950 },
  { x: 475, y: -700+950 },
  { x: 475, y: -275+950 },
  { x: 475, y:    0+950 },
  { x:   0, y:    0+950 },
] 
var person_path = [
  { x: 450, y:  0 },
  { x: 475, y: -275},
  { x: 200, y: -275},
  { x: 475, y: -275},
  { x: 475, y: -375},
  { x: 300, y: -390},
  { x: 300, y: -485},
  { x: 150, y: -500},
  { x: 150, y: -400},
  { x: 150, y: -525},
  { x: 150, y: -500},
  { x: 300, y: -500},
  { x: 300, y: -390},
  { x: 725, y: -390},
  { x: 725, y: -700},
  { x: 475, y: -700},
  { x: 475, y: -275},
  { x: 475, y:    0},
  { x:   0, y:    0},
] 
//The data for our line
var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

//This is the accessor function we talked about above
var lineFunction = d3.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .curve(d3.curveCardinal);

//The SVG Container
var svgContainer =d3.select("#root").select("#floor");
var person = d3.select("#root").select('#floor').select('#person');
console.log('person is ', person);
//The line SVG Path we draw

var pathTween = function(path){
  console.log('in pathTween path is ', path);
  console.log('in pathTween this is ', this);
  var length = path.node().getTotalLength(); // Get the length of the path
   var r = d3.interpolate(0, length); //Set up interpolation from 0 to the path length 
  return function(t){
    var point = path.node().getPointAtLength(r(t)); // Get the next point along the path
    var newX = point.x - 20;
    var newY = point.y - 20;
    d3.select(this) // Select the circle
     .attr('transform','translate(' + newX + ', ' + newY + ') scale(.4 .4)')
  }
}
var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(line_path))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

var totalLength = lineGraph.node().getTotalLength();

  lineGraph
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .duration(person_path.length * 1050)
    .ease(d3.easeLinear)
    .attr("stroke-dashoffset", 0);

	person.transition()
    .duration(20000)
    .ease(d3.easeLinear)
    .tween("pathTween", function(){return pathTween(lineGraph)})
    // .tween("pathTween", pathTween); //Custom tween to set the cx and cy attributes*/

 
