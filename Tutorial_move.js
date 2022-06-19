//This file is the area where I set the timing of each circle.
//The reason why I set the time for each circle was that there was no way to measure the exact time.
//There was also a way to set it using the height of the wavelength of the music, but the exact pattern was not found, 
//so it was discarded in the middle.


let ments = ["1", "2", "3", "Let's go!", "Welcome to FELICE", "Let's do a simple tutorial", "When the small circle touches \n the big circle, press z", "Nice!", "Let's do it one more", "Not gonna be easy this time!", "Wow!", "You've become proficient", "Let's do it one last time"]

let num = 0;


function circle_check_T01() {    //First pattern
    push();

      if(timer >= 17000.16)
      {
      circle_T0[0].move(1);
      circle_T0[0].color_setup();
        if(timer >= 17000.16 && timer <= 18930.16)
        { 
          L.path(6)
        }
      }
      if(timer >= 18930.16)
      {
      circle_T0[1].move(2);
      circle_T0[1].color_setup();
        if(timer >= 18930.16 && timer <= 20800.16)
        { 
          L.path(5)
        }
      }
      if(timer >= 20800.16) //
      {
      circle_T0[2].move(0);
      circle_T0[2].color_setup();
        if(timer >= 20800.16 && timer <= 22640.16)
        { 
          L.path(7)
        }
      }
      if(timer >= 22640.16)
      {
      circle_T0[3].move(3);
      circle_T0[3].color_setup();
        if(timer >= 22640.16 && timer <= 24550.16)
        { 
         L.path(4)
        }
      }
      if(timer >= 24550.16)
      {
      circle_T0[4].move(13);
      circle_T0[4].color_setup();
        if(timer >= 24550.16 && timer <= 26450.16)
        { 
         L.path(8)
        }
      }
      if(timer >= 26450.16)
      {
      circle_T0[5].move(4);
      circle_T0[5].color_setup();
       if(timer >= 26450.16 && timer <= 28300.16)
       { 
        L.path(3)
       }
      }
      if(timer >= 28300.16)
      {
      circle_T0[6].move(12);
      circle_T0[6].color_setup();
        if(timer >= 28300.16 && timer <= 29250.16)
        { 
         L.path(9)
        }
      }

      if(timer >= 29250.16) //
      {
      circle_T0[7].move(5);
      circle_T0[7].color_setup();
        if(timer >= 29250.16 && timer <= 32600.16)
        { 
         L.path(2)
        }
      }

      if(timer >= 29800.16)
      {
      circle_T0[8].move(5);
      circle_T0[8].color_setup();
       if(timer >= 29800.16 && timer <= 32600.16)
       { 
        L.path(2)
       }
      }

      if(timer >= 30250.16)
      {
      circle_T0[9].move(4);
      circle_T0[9].color_setup();
        if(timer >= 30250.16 && timer <= 32600.16)
        { 
         L.path(3)
        }
      }
      
      if(timer >= 30700.16)
      {
      circle_T0[10].move(3);
      circle_T0[10].color_setup();
        if(timer >= 30700.16 && timer <= 32600.16)
        { 
         L.path(4)
        }
      }

      if(timer >= 31600.16)
      {
      circle_T0[11].move(2);
      circle_T0[11].color_setup();
        if(timer >= 31600.16 && timer <= 32600.16)
        { 
         L.path(5)
        }
      }
   
    pop()
    
}
    
function circle_check_T02() {   //Second pattern
  push()
    if(timer >= 46020.16)
    {
      circle_T0[12].move(11);
      circle_T0[12].color_setup();
      if(timer >= 46020.16 && timer <= 47000.16)
       { 
         L.path(10)
       }
    }
    if(timer >= 46900.16)
    {
      circle_T0[13].move(6);
      circle_T0[13].color_setup();
      if(timer >= 46900.16 && timer <= 47940.16)
      { 
        L.path(1)
      }
    }
    if(timer >= 47940.16)
    {
      circle_T0[14].move(10);
      circle_T0[14].color_setup();
      if(timer >= 47940.16 && timer <= 48810.16)
      { 
        L.path(11)
      }
    }
    if(timer >= 48810.16)
    {
      circle_T0[15].move(8);
      circle_T0[15].color_setup();
      if(timer >= 48810.16 && timer <= 49910.16)
      { 
        L.path(0)
      }
    }
    if(timer >= 49910.16)
    {
      circle_T0[16].move(9);
      circle_T0[16].color_setup();
      if(timer >= 49910.16 && timer <= 50775.16)
      { 
        L.path(12)
      }
    }
    if(timer >= 50775.16)
    {
      circle_T0[17].move(7);
      circle_T0[17].color_setup();
      if(timer >= 50775.16 && timer <= 51730.16)
      { 
        L.path(13)
      }
    }
    if(timer >= 51730.16)
    {
      circle_T0[18].move(9);
      circle_T0[18].color_setup();
      circle_T0[19].move(7);
      circle_T0[19].color_setup();
      if(timer >= 51730.16 && timer <= 52630.16)
      { 
        L.path(12)
        L.path(13)
      }
    }
    if(timer >= 52630.16)
    {
      circle_T0[20].move(10);
      circle_T0[20].color_setup();
      circle_T0[21].move(8);
      circle_T0[21].color_setup();
      if(timer >= 52630.16 && timer <= 53680.16)
      { 
        L.path(11)
        L.path(0)
      } 
    }
    if(timer >= 53680.16) //난이도 조절하기
    {
      circle_T0[22].move(7);
      circle_T0[22].color_setup();
      if(timer >= 53680.16 && timer <= 54650.16)
      { 
        L.path(13)
      }
    }
    if(timer >= 54650.16)
    {
      circle_T0[23].move(9);
      circle_T0[23].color_setup();
      if(timer >= 54650.16 && timer <= 55510.16)
      { 
        L.path(12)
      }
    }
    if(timer >= 55510.16)
    {
      circle_T0[24].move(8);
      circle_T0[24].color_setup();
      if(timer >= 55510.16 && timer <= 56410.16)
      { 
        L.path(0)
      }
    }
    if(timer >= 56410.16)
    {
      circle_T0[25].move(10);
      circle_T0[25].color_setup();
      if(timer >= 56410.16 && timer <= 57310.16)
      { 
        L.path(11)
      }
    }
    if(timer >= 57310.16)
    {
      circle_T0[26].move(6);
      circle_T0[26].color_setup();
      if(timer >= 57310.16 && timer <= 58220.16)
      { 
        L.path(1)
      }
    }
    if(timer >= 58220.16)
    {
      circle_T0[27].move(11);
      circle_T0[27].color_setup();
      if(timer >= 58220.16 && timer <= 60060.16)
      { 
        L.path(10)
      }
    }
    if(timer >= 58660.16)
    {
      circle_T0[28].move(11);
      circle_T0[28].color_setup();
    }
    if(timer >= 59120.16)
    {
      circle_T0[29].move(11);
      circle_T0[29].color_setup();
    }
    if(timer >= 60060.16)
    {
      circle_T0[30].move(6);
      circle_T0[30].color_setup();
      if(timer >= 60060.16 && timer <= 61010.16)
      { 
        L.path(1)
      }
    }
    if(timer >= 61010.16)
    {
      circle_T0[31].move(12);
      circle_T0[31].color_setup();
      circle_T0[32].move(5);
      circle_T0[32].color_setup();
      if(timer >= 61010.16 && timer <= 62020.16)
      { 
        L.path(9)
        L.path(2)
      }
    }
}

function circle_check_T03() {    //Last pattern
    if(timer >= 76970.16)
    {
      circle_T0[33].move(2);
      circle_T0[33].color_setup();
      if(timer >= 76970.16 && timer <= 78920.16)
      { 
        L.path(5)
      }
    }
    if(timer >= 78920.16)
    {
      circle_T0[34].move(3);
      circle_T0[34].color_setup();
      if(timer >= 78920.16 && timer <= 80750.16)
      { 
        L.path(4)
      }
    }
    if(timer >= 80750.16)
    {
      circle_T0[35].move(4);
      circle_T0[35].color_setup();
      if(timer >= 80750.16 && timer <= 82600.16)
      { 
        L.path(3)
      }
    }
    if(timer >= 82600.16)
    {
      circle_T0[36].move(5);
      circle_T0[36].color_setup();
      if(timer >= 82600.16 && timer <= 84450.16)
      { 
        L.path(2)
      }
    }
    if(timer >= 84450.16)
    {
      circle_T0[37].move(6);
      circle_T0[37].color_setup();
      if(timer >= 84450.16 && timer <= 86300.16)
      { 
        L.path(1)
      }
    }
    if(timer >= 86300.16)
    {
      circle_T0[38].move(8);
      circle_T0[38].color_setup();
      if(timer >= 86300.16 && timer <= 88090.16)
      { 
        L.path(0)
      }
    }
    if(timer >= 88090.16)
    {
      circle_T0[39].move(7); 
      circle_T0[39].color_setup();
      if(timer >= 88090.16 && timer <= 89140.16)
      { 
        L.path(13)
      }
    }
    if(timer >= 89140.16) 
    {
      circle_T0[40].move(9); 
      circle_T0[40].color_setup();
      if(timer >= 89140.16 && timer <= 91350.16)
      { 
        L.path(12)
      }
    }
    if(timer >= 89590.16)
    {
      circle_T0[41].move(10);  
      circle_T0[41].color_setup();
      if(timer >= 89590.16 && timer <= 91350.16)
      { 
        L.path(11)
      }
    }
    if(timer >= 90040.16)
    {
      circle_T0[43].move(11); 
      circle_T0[43].color_setup();
      if(timer >= 90040.16 && timer <= 91350.16)
      { 
        L.path(10)
      }
    }
    if(timer >= 90490.16)
    {
      circle_T0[44].move(12); 
      circle_T0[44].color_setup();
      if(timer >= 90490.16 && timer <= 91350.16)
      { 
        L.path(9)
      }

    }
    if(timer >= 91350.16)
    {
      circle_T0[47].move(12); 
      circle_T0[47].color_setup();
      circle_T0[48].move(5);
      circle_T0[48].color_setup();
      if(timer >= 91350.16 && timer <= 93350.16)
      { 
        L.path(2)
      }
    }
}

function tutorial_ment() {
    
    push()
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(307, 100, 50);
    fill(255);
    textAlign(CENTER)
    textSize(250)
    

    if(timer >= 1 && timer <= 300)
    {
      text(ments[0], width/2, height/2 + 100)
    }
    if(timer > 300 && timer <= 650)
    {
      text(ments[1], width/2, height/2 + 100)
    }
    if(timer > 650 && timer <= 1050)
    {
      text(ments[2], width/2, height/2 + 100)
    }
    if(timer > 1050 && timer <= 1750)
    {
      push()
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(307, 100, 50);
      fill(255);
      textAlign(CENTER)
      textSize(190)
      text(ments[3], width/2, height/2 + 80)
      pop()
    }
    if(timer > 1750 && timer <= 5500)
    {
      push()
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(307, 100, 50);
      fill(255);
      textAlign(CENTER)
      textSize(85)
      text(ments[4], width/2, height/2 + 50)
      pop()
    }
    if(timer > 5500 && timer <= 9150)
    {
      push()
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(307, 100, 50);
      fill(255);
      textAlign(CENTER)
      textSize(65)
      text(ments[5], width/2, height/2 + 50)
      pop()
    }
    if(timer > 9150 && timer <= 16000)
    {
      push()
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(307, 100, 50);
      fill(255);
      textAlign(CENTER)
      textSize(50)
      text(ments[6], width/2, height/2 + 40)
      pop()
    }


    if(timer > 32500.16 && timer <= 35500.16)
    {
      push()
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(307, 100, 50);
      fill(255);
      textAlign(CENTER)
      textSize(85)
      text(ments[7], width/2, height/2 + 50)
      pop()
    }
    if(timer > 35500.16 && timer <= 39000.16)
    {
      push()
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(307, 100, 50);
      fill(255);
      textAlign(CENTER)
      textSize(65)
      text(ments[8], width/2, height/2 + 50)
      pop()
    }
    if(timer > 39000.16 && timer <= 45000.16)
    {
      push()
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(307, 100, 50);
      fill(255);
      textAlign(CENTER)
      textSize(50)
      text(ments[9], width/2, height/2 + 50)
      pop()
    }


    if(timer > 62010.16 && timer <= 65510.16)
    {
      push()
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(307, 100, 50);
      fill(255);
      textAlign(CENTER)
      textSize(85)
      text(ments[10], width/2, height/2 + 50)
      pop()
    }
    if(timer > 65510.16 && timer <= 69010.16)
    {
      push()
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(307, 100, 50);
      fill(255);
      textAlign(CENTER)
      textSize(60)
      text(ments[11], width/2, height/2 + 50)
      pop()
    }
    if(timer > 69010.16 && timer <= 75010.16)
    {
      push()
      drawingContext.shadowBlur = 32;
      drawingContext.shadowColor = color(307, 100, 50);
      fill(255);
      textAlign(CENTER)
      textSize(55)
      text(ments[12], width/2, height/2 + 50)
      pop()
    }
    pop()
}
