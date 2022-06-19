let start = 0;

let x = 0;
let x1 = 0.5;
let theta = 0.0;

let v = 0.5;     


function setup() {

  //Main menu music setup
  //v -> Taking as a variable to add a smaller and larger effect to the music
  Maintheme.play();
  Maintheme.setVolume(v);       

  createCanvas(windowWidth, windowHeight)
  
  angleMode(DEGREES)
  rectMode(CENTER)


  //Size setting of the Game_Logo()
  noiseDetail(2, 1)
  
}

function draw() {
  
  background(220);

  start_ment();
  Game_symbol();
  fade_out();
  Game_Logo();
}


function preload() {
  Maintheme = loadSound('Songs/Main menu theme.mp3');
  font4logo = loadFont('Font/Monoton-Regular.ttf');
}


function Game_Logo()        //Control elements: name, text size, location, text color, text font
{ 
    push()
    fill(255, 255, 255)
    strokeWeight(0.1);
    textSize(140);
    textAlign(CENTER);
    textFont(font4logo);
    text("FeLice", width/2, height/2 - 156)
    pop()
}

function start_ment() {     //Control elements: ment, text size, text font, location
  push()
  let x1 = map(sin(theta), -1, +1, 0, 100);                   //The sin value is used to make the Alpha value smaller and larger repeatedly
  fill(0, x1)
  
  strokeWeight(0.1);
  textSize(50);
  textAlign(CENTER);
  textFont(font4logo);
  text("Hold the mouse down to play", width/2, height/2 + 200)

  theta += 1.5;                                               //Increasing this value increases the blink rate
  pop()
}


function Game_symbol()      //control elements: wave color, length, rotate speed
{
  push()
  noStroke()

  translate(width/2, height/2)

  let space = 0.1

  for (let i = 0; i < 360; i += space) {
    
    let xoff = map(cos(i), -1, 1, 0, 3)
    let yoff = map(sin(i), -1, 1, 0, 3)

    let n = noise(xoff + start, yoff + start)

    //Adjust height of the wavelength
    let h = map(n, 0, 1, -150, 150)

    //wave color
    let r = map(sin(i), -1, 1, 100, 200)
    let g = map(h, -150, 150, 0, 150)
    let b = map(n, 0, 1, 150, 255)

    //rotate the wavelength
    rotate(space)
    
    fill(r, g, b)

    rect(500, 0, h, 1)
  }

  start += 0.003
  pop()
}

function fade_out() {
  push()
  fill(0, x)
  rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight)
  pop()

  if(mouseIsPressed === true) 
  {
    x += 5                      //As the alpha value rises, the rectangle slowly becomes visible
    
    Maintheme.setVolume(v);
    v -= 0.008                  //Can raise down the volume of the music

    if(x > 450) 
    {
      window.location.href = "index_Song_select.html";
    }
  }
}

function windowResized() //Text that appears when players resize the window
{
  push()
    noLoop()
    resizeCanvas(windowWidth, windowHeight);
    background(255);
    stroke(0);
    textAlign(CENTER);
    textSize(50);
    text("Please, press F5 button to play in normally", width/2, height/2);
  pop()
}
