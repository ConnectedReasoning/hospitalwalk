
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

//The line SVG Path we draw
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
      .duration(person_path.length * 1100)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0);

  lineGraph.on("click", function(){
    lineGraph      
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", totalLength);
  })

 console.log('total-length is ', totalLength);

var tl = new TimelineLite();
var x1 = 0;
var y1 = 875;
var x2 = 0;
var y2 = 0;

var step = {}; person_path[i];

for(var i = 0; i < person_path.length; i++){
  if(i > 0) { 
    x1 = person_path[i-1].x;
    y1 = person_path[i-1].y+874;
  }
  x2 = person_path[i].x;
  y2 = person_path[i].y +874;

  tl.add( TweenLite.to("#person", 2, {x:x2, y:y2, ease:Sine.easeOut }));
  
};
