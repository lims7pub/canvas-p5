//https://openprocessing.org/sketch/1608014

let str = "Design, Visualization, Appearances and Feelings, Layout, Typography, Availability, Simplicity"
let str_arr = [];

let font;
let sdgreg;
function preload() {
  font = loadFont("../assets/font/SpaceGrotesk-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 240, 100, 100, 255);
  let strs = str.split(" ");
  for (let i = 0; i < strs.length*20; i++) {
    let x = random(-width / 2, width / 2);
    let y = random(-height / 2, height / 2);
    let z = random(-width*5, width/2);
    str_arr.push(new Type(strs[i%strs.length], x, y, z));
  }
}

function draw() {
  background(0,0,0);
	orbitControl();
  for (let i = 0; i < str_arr.length; i++) {
    str_arr[i].update();
    str_arr[i].display();
  }
}

class Type {
  constructor(_str, _x, _y, _z) {
    this.str = _str;
    this.x = _x;
    this.y = _y;
    this.z = _z;
  }

  update() {
    this.z += 10;
    if(this.z > width/2){
    	this.z = -width*5;
    }
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    textAlign(CENTER, CENTER);
    textFont(font);
    textSize(100);
		fill(0,0,100);
    text(this.str, 0, 0);
    pop();
  }
}