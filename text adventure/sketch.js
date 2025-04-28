let myInput;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an input element and place it
  // beneath the canvas.
  myInput = createInput();
  myInput.position(windowWidth/2.3, windowHeight/1.2);

  
  slider = createSlider(0, 255);
  slider.position(10, 10);
  slider.size(80);
}

function draw() {
  background(0,0,0,0);

  // Use the input to display a message.
  let msg = myInput.value();
  let g = slider.value();
  text(msg, g, g,);

  rect(100,windowHeight/2,windowWidth-200,100)

  //const input = document.querySelector("input");
  //const log = document.getElementById("uname");
  //input.addEventListener("input", updateValue)
  //text(uname, 23, 59);
  

 


  // Create a slider and place it at the top of the canvas.

  describe('A dark gray square with a range slider at the top. The square changes color when the slider is moved.');


  // Use the slider as a grayscale value.

}


function move() {
  shuu.position()
}
shuu.addEventListener('mousepressed', move);

//sorry i am so tired