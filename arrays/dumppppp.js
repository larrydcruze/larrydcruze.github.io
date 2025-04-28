    var canvas = createCanvas(1260, 1000,)
    canvas.parent('holder');

    //background ('#b00b69');
    background (0,0,0,0)
    
    //var imgObject = new Image();
    //imgObject.src = '2016_1025_191401-500x429.gif'

    id="huh"
    const gay = ["lol", "lmao",]
    
    let bleh = createElement (a, [gay]);
    bleh.style = ('color', 'black');
    bleh.position = (160,134);
    let p = createP(gay);
    p.position(5, 0);





    let dust = createElement (dirt,[birds]);
dust.style = ('color', 'black');
dust.position(5,0)
let p = createP(birds)
p.position(5, 0);

let bird = birds.find(birds => birds.gay === "d");
console.log(birds)



let bird = birds.find(birds => birds.gay === "d");

let dust = createElement (dirt,[bird]);
dust.style = ('color', 'black');
dust.position(5,0)
let p = createP(bird)
p.position(5, 0);




id="erm"
const birds = [
    {
        "breed":"a",
        "gay":"b",
    },
    {
        "breed":"c",
        "gay":"d",
    }
]




if (mouseIsPressed === true) {
    fill (255);
  }
  else { fill (0);
  }
  rect(mouseX-4,mouseY-5, 10, 6)



  update(time){
    this.posX = width / 2 + this.radius * sin(angle);
    let ySpeed = 8 / this.size;
    this.posY += ySpeed;

  }




  createParticles(2,2);

  div = createDiv('div');
  div.addClass('particles');
}

function draw(){
  background(0,0,0,0);

  // Draw the image.
  //image(img, 0, 0, windowWidth, windowHeight);

  let currentTime = frameCount / 60
  
  for (let part of particles){
    part.update(currentTime)
    part.display()
  }
}

class particles{
  constructor() {
    this.posX = 0;
    this.posY = random(-height, 0);
    this.size = random(2, 5);
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.color = color(random(200, 256), random(200, 256), random(200, 256))
}
}
function cake(){
  if (mouseIsPressed === true){
    createParticles()
    else (toggleClass('particles'))
  }
}