//The overall setting is the same as 'Tutorial_High.js'. Please refer to that for explanation of the annotation
//The difference is that the 'visual()' effect is deleted Also, whole neon sign effect has eliminated.
//Because the two effects use graphics a lot, So I deliberately removed them in 'Low spec mode'.

let P = 0
let P1 = 100

let font4logo;
let timer = 0
let timing = 0

let c
let c2;
let c3;


let circle_T0 = [];
let circle_T1 = [];
let circlecheck_T0 = [];
let circlecheck_T1 = [];
let BPMnum = 75;
let L 

let Tutorial_theme

let song
let fft
let particles = []

let img

let score_img = [];
let numFrames = 5;

let menu_button
let retry_button




function setup() {
    rectMode(CENTER)
    frameRate(144)
     imageMode(CENTER)
     img.filter(BLUR, 12)
    
    Tutorial_theme.play();
    Tutorial_theme.setVolume(0.3);
    
    createCanvas(windowWidth, windowHeight)
    colorMode(HSB, 360, 100, 100, 100);
      noCursor();
     
    L = new Lines();
    fft = new p5.FFT();

    for(let i = 0; i < BPMnum; i++)
    {
      circle_T0[i] = new Circle_T0();
      circlecheck_T0[i] = 0;
    }
}

function draw() {
    timer += deltaTime;
    print(timer);
    
    background(230, 100, 6);
    stroke(255, 200);
    strokeWeight(4)
    image(img, width/2, height/2)


    main_circle();


    push()
    song_Name(100, 80);
    Score_amount(windowWidth - 200, 80);
    pop()
    

    circle_check_T01();
    circle_check_T02();
    circle_check_T03();
    
    tutorial_ment();

    fade_out();
    
}

function windowResized() 
{
    noLoop()
    resizeCanvas(windowWidth, windowHeight);
    background(255);
    stroke(1);
    fill(0)
    textAlign(CENTER);
    textSize(40)
    text("Please, press F5 button to play in normally", width/2, height/2);
}

function song_Name(x, y) 
{
push()
    noFill();
      stroke(207, 7, 99);
    stroke(255, 10);
    fill(255)
    textSize(45);
    textAlign(CENTER);
    textFont(font4logo);
    text("D4DJ \n Tutorial Song ", x + 100, y);    
    text("D4DJ \n Tutorial Song ", x + 100, y);    
    text("D4DJ \n Tutorial Song ", x + 100, y);    
pop()
}

function Score_amount(x, y) 
{
push()
  noFill();
  stroke(207, 7, 99);
    fill(255)
    textSize(50);
    textAlign(CENTER);
    textFont(font4logo);
    text("Score ", x, y);
    text(S, x, y + 80);
pop()
}

function preload() {

    font4logo = loadFont('Font/Alata-Regular.ttf');
    Tutorial_theme = loadSound('Songs/Tutorial BGM.mp3');
    ending_theme = loadSound('Songs/Victory!.mp3');
    img = loadImage('Images/logo_game.png')

    for (let i = 0; i < numFrames; i++) {
    let filename = 'Images/' + i + '.png'
    let scores = loadImage(filename);
    score_img.push(scores)
    }
}

function glow(glowColor, blurriness)
{
    drawingContext.shadowBlur = blurriness;
    drawingContext.shadowBlur = glowColor;
}

function main_circle() {
      
    push()
      noFill();
      stroke(207, 7, 99);
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(207, 7, 99);
      ellipse(width/2, height/2, 760, 760);
      ellipse(width/2, height/2, 760, 760);
    pop()
}

function fade_out() {
  
  push()
  noStroke()
  fill(0, P)
  rect(0, 0, 50000, 500000)
  pop()

  if(timer >= 110000)
  {
    P += 0.8
    if(timer >= 115000)
    {
      resizeCanvas(windowWidth, windowHeight);
      
      cursor();
      imageMode(CENTER);
      rectMode(CENTER);

      background(0, 0, 0);
      final_score();

      timing++;

      if(timing == 1)
      {
        ending_theme.play();
        ending_theme.setVolume(0.4);
      }
    }
  }
}

function final_score() {
  textAlign(CENTER);
  fill(255);
  textSize(100);
  textFont(font4logo);
  text("Score: " + S , windowWidth/2, windowHeight/2 - 300);

  menu_button = createImg('Images/menu button_0.png');
  retry_button = createImg('Images/retry button_0.png');

  menu_button.position(width/2-150, height/2 + 100);
  retry_button.position(width/2-150, height/2 + 350);

  menu_button.size(300, 150);
  retry_button.size(300, 150);

  menu_button.mousePressed(togglePlaying);
  retry_button.mousePressed(togglePlaying2);
  
  //Final Score setting
  if (S >= 20000)
  {
    text("Perfect!!", windowWidth/2, 100);
    image(score_img[0], windowWidth/2, windowHeight/2 - 100);
  }
  else if (S >= 15000 && S < 20000)
  {
    text("Nice job!", windowWidth/2, 100);
    image(score_img[1], windowWidth/2, windowHeight/2 - 100);
  }
  else if (S >= 10000 && S < 15000)
  {
    text("Well Done!", windowWidth/2, 100);
    image(score_img[2], windowWidth/2, windowHeight/2 - 100);
  }
  else if (S >= 8000 && S < 10000)
  {
    text("You can do better!", windowWidth/2, 100);
    image(score_img[3], windowWidth/2, windowHeight/2 - 100);
  }
  else if (S >= 0 && S < 8000)
  {
    text("...better next Time!", windowWidth/2, 100);
    image(score_img[4], windowWidth/2, windowHeight/2 - 100);

  }

  noStroke()
  fill(0, P1)
  rect(0, 0, 10000, 10000)
  P1 -= 0.8

}

function togglePlaying() {
   window.location.href = "index_Song_select.html";
}

function togglePlaying2() {
   window.location.href = "index_Tutorial_L.html";
}
