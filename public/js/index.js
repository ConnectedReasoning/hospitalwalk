
var path = [
  { x: 475, y:    0 },
  { x: 475, y: -275 },
  { x: 200, y: -275 },
  { x: 475, y: -275 },
  { x: 475, y: -375 },
  { x: 300, y: -390 },
  { x: 300, y: -485 },
  { x: 150, y: -500 },
  { x: 150, y: -400 },
  { x: 150, y: -525 },
  { x: 150, y: -500 },
  { x: 300, y: -500 },
  { x: 300, y: -390 },
  { x: 725, y: -390 },
  { x: 725, y: -700 },
  { x: 475, y: -700 },
  { x: 475, y: -275 },
  { x: 475, y:    0 },
  { x:   0, y:    0 },
] 


var tl = new TimelineLite();

for(i = 0; i < path.length; i++){
  var step = path[i];
  tl.add( TweenLite.to("#person", 2, {x:step.x, y:step.y, ease:Sine.easeOut }));
}
