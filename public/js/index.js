
var path = [
  { x: 450, y:  875 },
  { x: 475, y: -275+875 },
  { x: 200, y: -275+875 },
  { x: 475, y: -275+875 },
  { x: 475, y: -375+875 },
  { x: 300, y: -390+875 },
  { x: 300, y: -485+875 },
  { x: 150, y: -500+875 },
  { x: 150, y: -400+875 },
  { x: 150, y: -525+875 },
  { x: 150, y: -500+875 },
  { x: 300, y: -500+875 },
  { x: 300, y: -390+875 },
  { x: 725, y: -390+875 },
  { x: 725, y: -700+875 },
  { x: 475, y: -700+875 },
  { x: 475, y: -275+875 },
  { x: 475, y:    0+875 },
  { x:   0, y:    0+875 },
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
    y1 = path[i-1].y;
  }
  x2 = path[i].x;
  y2 = path[i].y;

  tl.add( TweenLite.to("#person", 2, {x:x2, y:y2, ease:Sine.easeOut }));
  //setTimeout(function(){
    d3.select("#root").select("#floor").append("line").style("stroke", "blue").attr("x1", x1).attr("y1", y1+25).attr("x2", x2).attr("y2", y2+25);
  //  }, 1000);

  console.log('line is from {' + x1 + ', ' + y1 + '} to {' + x2 + ', ' + y2 + '}')
 
}

//d3.select("#root").select("#floor").append("line").style("stroke", "red").attr("x1", 500).attr("y1", 950).attr("x2", 950).attr("y2", 950);
  //d3.select("#root").select("#floor").append("line").style("stroke", "blue").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
  //d3.select("#root").select("#floor").append("line").style("stroke", "green").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
  //d3.select("#root").select("#floor").append("line").style("stroke", "magenta").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
  //d3.select("#root").select("#floor").append("line").style("stroke", "cyan").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);
  //d3.select("#root").select("#floor").append("line").style("stroke", "pink").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);

//d3.select("#root").select("svg").append('line').attr({x1: 0, y1: 0, x2: 200, y2: 200, stroke: '#000' });

