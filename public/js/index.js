
var path = [
  { x: 450, y:  0 },
  { x: 475, y: -275+0 },
  { x: 200, y: -275+0 },
  { x: 475, y: -275+0 },
  { x: 475, y: -375+0 },
  { x: 300, y: -390+0 },
  { x: 300, y: -485+0 },
  { x: 150, y: -500+0 },
  { x: 150, y: -400+0 },
  { x: 150, y: -525+0 },
  { x: 150, y: -500+0 },
  { x: 300, y: -500+0 },
  { x: 300, y: -390+0 },
  { x: 725, y: -390+0 },
  { x: 725, y: -700+0 },
  { x: 475, y: -700+0 },
  { x: 475, y: -275+0 },
  { x: 475, y:    0+0 },
  { x:   0, y:    0+0 },
] 


var tl = new TimelineLite();
var x1 = 0;
var y1 = 875;
var x2 = 0;
var y2 = 0;

var step = {}; path[i];
for(var i = 0; i < path.length; i++){
  if(i > 0) { 
    x1 = path[i-1].x;
    y1 = path[i-1].y+874;
  }
  x2 = path[i].x;
  y2 = path[i].y +874;
  d3.select("#root").select("#floor").append("line").style("stroke", "blue").style("stroke-dasharray", ("4, 10")).attr("stroke-width", "8").attr("id", "segment"+i).attr("x1", x1).attr("y1", y1+25).attr("x2", x2).attr("y2", y2+25);  
};
for(var i = 0; i < path.length; i++){
  if(i > 0) { 
    x1 = path[i-1].x;
    y1 = path[i-1].y+874;
  }
  x2 = path[i].x;
  y2 = path[i].y +874;

  tl.add( TweenLite.to("#person", 2, {x:x2, y:y2, ease:Sine.easeOut }));
  
};

//d3.select("#root").select("#floor").append("line").style("stroke", "red").attr("x1", 500).attr("y1", 950).attr("x2", 950).attr("y2", 950);
  //d3.select("#root").select("#floor").append("line").style("stroke", "blue").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
  //d3.select("#root").select("#floor").append("line").style("stroke", "green").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
  //d3.select("#root").select("#floor").append("line").style("stroke", "magenta").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
  //d3.select("#root").select("#floor").append("line").style("stroke", "cyan").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
  //d3.select("#root").select("#floor").append("line").style("stroke", "pink").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);

//d3.select("#root").select("svg").append('line').attr({x1: 0, y1: 0, x2: 200, y2: 200, stroke: '#000' });

