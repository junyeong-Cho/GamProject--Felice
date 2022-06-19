let x = 600
let img0
let img1
let img2
let img3

let button;
let button2;

let flag = false;
let flag2 = false;




function setup() {
  audio.setVolume(0.4);
  audio2.setVolume(0.4);

  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  imageMode(CENTER);
  button_setup();
  button_setup2();
  button_setup3();

  radio_setup();

  
}

function draw() {
  background(0);

  letters()

  circle_0();
  circle_1(); 
}

function windowResized()    //Text that appears when players resize the window
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

function circle_0() {
  push()
  noFill();
  strokeWeight(5);
  stroke(207, 7, 99);
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(307, 100, 50);
  image(img0, width/2 - x, height/2, 760, 300);
  //image(img2, width/2 - x, height/2 + 250, 200, 200);
  ellipse(width/2 - x, height/2, 760, 760);
  ellipse(width/2 - x, height/2, 760, 760);
  ellipse(width/2 - x, height/2, 760, 760);
  ellipse(width/2 - x, height/2, 760, 760);
  ellipse(width/2 - x, height/2, 760, 760);
  ellipse(width/2 - x, height/2, 760, 760);
  ellipse(width/2 - x, height/2, 760, 760);
  pop()
}

function circle_1() {
  push()
  noFill();
  strokeWeight(5);
  stroke(207, 7, 99);
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(144, 37, 80);
  image(img1, width/2 + x, height/2, 740, 740);
  ellipse(width/2 + x, height/2, 760, 760);
  ellipse(width/2 + x, height/2, 760, 760);
  ellipse(width/2 + x, height/2, 760, 760);
  ellipse(width/2 + x, height/2, 760, 760);
  pop()
}

function preload() {
  img0 = loadImage('Images/logo_game.png')
  img1 = loadImage('Images/ski8er boy.PNG')
  audio = loadSound('Songs/Tutorial BGM.mp3');
  audio2 = loadSound('Songs/Sk8er Boi_pre.mp3');
}

function button_setup() {   //Tuto_play_button
  push()

  button = createImg('Images/play button 0-1.png');
  button2 = createImg('Images/play button 0.png');

  button.position(width/2 - 700, height/2 + 400);
  button2.position(-1400, -1400);

  button.size(200, 200);
  button2.size(200, 200);

  button.mousePressed(togglePlaying);
  button2.mousePressed(togglePlaying);

  button.mouseOver(buttonOver);  
  button2.mouseOut(buttonOut);
  
  pop()
}

function button_setup2() {  //Ski_play_button

  push()

  button3 = createImg('Images/play button 1-1.png');
  button4 = createImg('Images/play button 1.png');

  button3.position(width/2 + 520, height/2 + 400);
  button4.position(-1400, -1400);

  button3.size(200, 200);
  button4.size(200, 200);

  button3.mousePressed(togglePlaying2);
  button4.mousePressed(togglePlaying2);

  button3.mouseOver(buttonOver2);  
  button4.mouseOut(buttonOut2);

  button4.mousePressed(togglePlaying2);
  pop()
}

function button_setup3() {    //Setting_button

  push()

  button5 = createImg('Images/settings_icon 2.png');
  button6 = createImg('Images/settings_icon 1.png');

  button5.position(0, 0);
  button6.position(-1400, -1400);

  button5.size(150, 150);
  button6.size(150, 150);

  button5.mousePressed(togglePlaying3);
  button6.mousePressed(togglePlaying3);

  button5.mouseOver(buttonOver3);  
  button6.mouseOut(buttonOut3);

  pop()
}


function togglePlaying() {
  if (flag) {
    audio.pause();
    flag = false;
  } else {
    audio.loop();
    audio2.pause();
    flag = true;
  }
}

function togglePlaying2() {
  if (flag2) {
    audio2.pause();
    flag2 = false;
  } else {
    audio.pause();
    audio2.loop();
    flag2 = true;
  }
}

function togglePlaying3() {
  if (set) {
    radio.position(150, 20);
    set = false;
  } else {

    radio.position(-1400, -1400);
    set = true;
  }
}


function letters() {
push()
    noFill();
      stroke(207, 7, 99);

    if((mouseX > width/2 - 980) && (mouseX < width/2 - 220) && (mouseY > height/2 - 380) && (mouseY < height/2 + 380))
    {
      drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(307, 100, 50);
    stroke(255, 10);
    fill(255)
    textSize(100);
    textAlign(CENTER);
    //네온 사인 효과
    text("Click it to play", width/2, 200);
    text("Click it to play", width/2, 200);
    text("Click it to play", width/2, 200);
    text("Click it to play", width/2, 200);
    text("Click it to play", width/2, 200);
    text("Click it to play", width/2, 200);
    text("Click it to play", width/2, 200);
    text("Click it to play", width/2, 200);
    text("Click it to play", width/2, 200);

        if (mouseIsPressed === true) 
          {
            if(str == "Low") 
             {
               window.location.href = "index_Tutorial_L.html";
             }
            if(str == "Medium") 
             {
               window.location.href = "index_Tutorial_M.html";
             }
            if(str == "High") 
             {
                window.location.href ="index_Tutorial_H.html";
             }
          }

    }
    else if((mouseX > width/2 + 220) && (mouseX < width/2 + 980) && (mouseY > height/2 - 380) && (mouseY < height/2 + 380))
    {
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(144, 37, 80);
      stroke(255, 10);
      fill(255)
      textSize(100);
      textAlign(CENTER);
      //네온 사인 효과
      text("Click it to play", width/2, 200);
      text("Click it to play", width/2, 200);
      text("Click it to play", width/2, 200);
      text("Click it to play", width/2, 200);
      text("Click it to play", width/2, 200);

      if (mouseIsPressed === true) 
      {
        if(str == "Low") 
         {
           window.location.href = "index_Sk8er Boi_L.html";
         }
        if(str == "Medium") 
         {
           window.location.href = "index_Sk8er Boi_M.html";
         }
        if(str == "High") 
         {
            window.location.href ="index_Sk8er Boi_H.html";
         }
      }
    }
    else {
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(0, 0, 100);
    stroke(255, 10);
    fill(255)
    textSize(100);
    textAlign(CENTER);
    text("Select the song", width/2, 200);
    text("Select the song", width/2, 200);
    text("Select the song", width/2, 200);
    }
    
pop()
}


function buttonOver() {
  button.position(-1400, -1400);
  button2.position(width/2 - 700, height/2 + 400);
}

function buttonOut() {
  button.position(width/2 - 700, height/2 + 400);
  button2.position(-1400, -1400);
}

function buttonOver2() {
  button3.position(-1400, -1400);
  button4.position(width/2 + 520, height/2 + 400);
} 

function buttonOut2() {
  button3.position(width/2 + 520, height/2 + 400);
  button4.position(-1400, -1400);
}
 
function buttonOver3() {
  button5.position(-1400, -1400);
  button6.position(0, 0);
} 

function buttonOut3() {
  button5.position(0, 0);
  button6.position(-1400, -1400);
}

function radio_setup() {
  radio = createRadio();		
  radio.option("High");		
  radio.option("Medium");		
  radio.option("Low");	  
  radio.style('color', 'white');
  radio.style('font-size', '60px');
  radio.position(-1400, -1400);
  radio.changed(selectRadio);		
}

function selectRadio() {	
  str = radio.value();		
}