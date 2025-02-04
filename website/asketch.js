//https://p5js.org/reference/p5/torus/
function setup() {
    var canvas=createCanvas(windowWidth, 500, WEBGL);
  
    describe('A white cone on a gray background.');
    canvas.parent('holder');
  }
  
  function draw() {
    background('#ff4800');
  
    // Enable orbiting with the mouse.
    orbitControl();
  
    // Draw the cone.
    torus();
  }