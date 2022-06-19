//Variables for fade-in, out effects
let P = 0
let P1 = 100

//Variables for Font Settings
let font4logo;

//Value set to measure game time
let timer = 0
let timing = 0

let c
let c2;
let c3;


//A matrix created to determine the properties of each circle
let circle_T0 = [];
let circle_T1 = [];
let circlecheck_T0 = [];
let circlecheck_T1 = [];
let BPMnum = 117;
let L 

//Tutorial Music Settings
let Tutorial_theme


//Declare variables for particle effects
let song
let fft
let particles = []


//Img settings
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

    //Colormode settings for accurate color representation
    colorMode(HSB, 360, 100, 100, 100);

    //Use a variable that removes the cursor for immersive play
    noCursor();
     
    L = new Lines();
    fft = new p5.FFT();

    //Create a Circle Array
    for(let i = 0; i < BPMnum; i++)
    {
      circle_T0[i] = new Circle_T0();
      circlecheck_T0[i] = 0;
    }
}

function draw() {
    //In-game time setting and print for check the sync
    timer += deltaTime;
    print(timer) 
    
    //Basic background setup
    background(230, 100, 6);
    stroke(255, 200)
    strokeWeight(4)
    image(img, width/2, height/2, 750, 750)



    //Baseline settings, Setting neon effects
    main_circle();


    //Song title setting, Scoreboard setting
    push()
    song_Name(100, 80)
    Score_amount(windowWidth - 200, 80);
    pop()
    
    //Circle movement setting
    circle_check_T01()
    circle_check_T02()
    circle_check_T03()

    Sk8er_Boi_ment()
    
    //particle setting
    visual()

    //Screen setting that comes out after playing it all
    fade_out()  
}

function windowResized()     //Text that appears when players resize the window
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

function song_Name(x, y)     //Control elements: song name, location, neon color 
{
push()
    noFill();
      stroke(207, 7, 99);
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(122, 23, 39);
    stroke(255, 10);
    fill(255)
    textSize(40);
    textAlign(CENTER);
    textFont(font4logo);

    //The profit of writing text several times is-
    //-the result of the neon sign effect being the result of the overlapping of text colors,- 
    //-so intentionally writing it several times to emphasize the color.
    text("Avril Lavigne\nSk8er Boi", x + 100, y);
    text("Avril Lavigne\nSk8er Boi", x + 100, y);
    text("Avril Lavigne\nSk8er Boi", x + 100, y);
    text("Avril Lavigne\nSk8er Boi", x + 100, y);
    text("Avril Lavigne\nSk8er Boi", x + 100, y);
    text("Avril Lavigne\nSk8er Boi", x + 100, y);
    
pop()
}

function Score_amount(x, y)  //Control elements: Score amount, location, neon color
{
push()
  noFill();
  stroke(207, 7, 99);
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(122, 23, 39);
    fill(255)
    textSize(45);
    textAlign(CENTER);
    textFont(font4logo);
    text("Score ", x, y);
    text("Score ", x, y);
    text("Score ", x, y);
    text("Score ", x, y);
    text("Score ", x, y);
    text(S, x, y + 80);
    text(S, x, y + 80);
    text(S, x, y + 80);
    text(S, x, y + 80);
    text(S, x, y + 80);
pop()
}

function preload() { 
    font4logo = loadFont('Font/Alata-Regular.ttf');
    Tutorial_theme = loadSound('Songs/Sk8er Boi.mp3');
    ending_theme = loadSound('Songs/Victory!.mp3');
    img = loadImage('Images/ski8er boy.PNG')

    for (let i = 0; i < numFrames; i++) {
      let filename = 'Images/' + i + '.png'
      let scores = loadImage(filename);
      score_img.push(scores)
      }
}

function glow(glowColor, blurriness)    //Img blur effect setting
{
    drawingContext.shadowBlur = blurriness;
    drawingContext.shadowBlur = glowColor;
}

function main_circle() {
      
    push()
      noFill();
      stroke(207, 7, 99);
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(122, 23, 39);
      ellipse(width/2, height/2, 760, 760);
      ellipse(width/2, height/2, 760, 760);
      ellipse(width/2, height/2, 760, 760);
      ellipse(width/2, height/2, 760, 760);   //760, 760
    pop()
}

function visual() {
  noFill()
  translate(width / 2, height / 2)

  fft.analyze()
  amp = fft.getEnergy(20, 200)
  
  let p = new Particle()
  particles.push(p)

  for (let i = particles.length - 1; i >= 0; i--) {
    if (!particles[i].edges()) {
      particles[i].update(amp > 188)  //Can use this to set when the particles will move
      particles[i].show()
    } else {
      particles.splice(i, 1)
    }
  }
}

function fade_out() {        //Code for the screen that comes out
  push()
  noStroke()
  fill(0, P)
  rect(0, 0, windowWidth, windowHeight)
  pop()

  if(timer >= 120000)
  {
    P += 0.8
    if(timer >= 125000)
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

  menu_button = createImg('Images/menu button_1.png');
  retry_button = createImg('Images/retry button_1.png');

  menu_button.position(width/2-150, height/2 + 100);
  retry_button.position(width/2-150, height/2 + 350);

  menu_button.size(300, 150);
  retry_button.size(300, 150);

  menu_button.mousePressed(togglePlaying);
  retry_button.mousePressed(togglePlaying2);
  
  //Final Score setting
  if (S >= 40000)
  {
    text("Perfect!!", windowWidth/2, 100);
    image(score_img[0], windowWidth/2, windowHeight/2 - 100);
  }
  else if (S >= 30000 && S < 40000)
  {
    text("Nice job!", windowWidth/2, 100);
    image(score_img[1], windowWidth/2, windowHeight/2 - 100);
  }
  else if (S >= 20000 && S < 30000)
  {
    text("Well Done!", windowWidth/2, 100);
    image(score_img[2], windowWidth/2, windowHeight/2 - 100);
  }
  else if (S >= 10000 && S < 20000)
  {
    text("You can do better!", windowWidth/2, 100);
    image(score_img[3], windowWidth/2, windowHeight/2 - 100);
  }
  else if (S >= 0 && S < 10000)
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
   window.location.href = "index_Sk8er Boi_H.html";
}


