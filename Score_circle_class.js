//Listed the X,Y values of the circle traveling in the path
let xList = [4.315, 1.7641, 1.005, 3.6175, 5.8052, 6.6052, 6.1538, 1.8176, 4.3215, 0.8715, 3.9581, 6.0215, 6.6052, 6.0606];
let yList = [5,     6,      7,     5.6,    3.1,    0     , 2.8,    6.3,    5,      6.3,    5.3,    2.8,    0     , 2.8   ];

//The path of a circle
let x1List = [248, 345, 379,  335,  206,   54, -107, -249, -344, -379, -344, -227,  -54, +105]
let y1List = [287, 157,  -1, -179, -319, -376, -364, -286, -159,   -5, +160, +304, +376, +364]

//Initial Score Value
let S = 000000

class Circle_color {
    constructor() {
        this.H = 100
        this.S = 100
        this.L = 100
    }
 
    radialGradient_0(sX, sY, sR, eX, eY, eR) //Circle color of the tutorial song, Powder pink
    {
        let gradient = drawingContext.createRadialGradient(
            sX, sY, sR, eX, eY, eR
        );
        gradient.addColorStop(0, color(0, 40, this.S, this.L));
        gradient.addColorStop(1, color(310, this.H, this.S, this.L)); // L값 0 to 100
    
        drawingContext.fillStyle = gradient;

        //Blur setup
       
        stroke(207, 7, 99);
        drawingContext.shadowBlur = 32;
        drawingContext.shadowColor = color(207, 7, 99);
    }
    
    radialGradient_2(sX, sY, sR, eX, eY, eR) //Circle color of the Sk8er_Boi, Light blue-green
    {
        let gradient = drawingContext.createRadialGradient(
            sX, sY, sR, eX, eY, eR
        );
        gradient.addColorStop(0, color(154, 40, 100, 100));
        gradient.addColorStop(1, color(154, this.H, this.S, this.L)); //L값 0 t 100
    
        drawingContext.fillStyle = gradient;

        //Blur setup
        stroke(207, 7, 99);
        drawingContext.shadowBlur = 32;
        drawingContext.shadowColor = color(207, 7, 99);
        
    }
}

class Circle_T0 {
    constructor()
    {
        this.x = width/2
        this.y = height/2
        this.velocity_x = 0;
        this.velocity_y = 0;
        this.x1
        this.y1
        this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x1, this.y1)
        this.r = 20

        c = new Circle_color();
    }
    color_setup()          //Setting a Circle in a Tutorial
    {   
        push()
        c.radialGradient_0(
            width/2 - this.velocity_x, height/2 - this.velocity_y , 0, 
            width/2 - this.velocity_x, height/2 - this.velocity_y, 350,
            color(310, 100, 100, 100),
            color(190, 100, 100, 100));

        stroke(255)
        strokeWeight(5);
        ellipse(this.x + this.velocity_x, this.y + this.velocity_y, 80, 80);
        ellipse(this.x + this.velocity_x, this.y + this.velocity_y, 80, 80);
        pop()
    }

    color_setup_1()       //Setting a Circle in a Sk8er_Boi
    {   
        push()
        c.radialGradient_2(
            width/2 - this.velocity_x, height/2 - this.velocity_y , 0, 
            width/2 - this.velocity_x, height/2 - this.velocity_y, 350,
            color(310, 100, 100, 100),
            color(190, 100, 100, 100));

        stroke(255)
        strokeWeight(5);
        ellipse(this.x + this.velocity_x, this.y + this.velocity_y, 80, 80);
        ellipse(this.x + this.velocity_x, this.y + this.velocity_y, 80, 80);
        pop()
    }


    move(z)             //Control elements: Speed of a circle, Click decision
    {
        if(z == 0)
        {
            this.velocity_x -= xList[z];
            this.velocity_y -= yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x - 249, this.y - 286, this.x + this.velocity_x, this.y + this.velocity_y)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 1)
        {
            this.velocity_x -= xList[z];
            this.velocity_y -= yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x - 107, this.y - 364)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 2)
        {
            this.velocity_x += xList[z];
            this.velocity_y -= yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x + 54, this.y - 376)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 3)
        {
            this.velocity_x += xList[z];
            this.velocity_y -= yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x + 206, this.y - 319)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 4)
        {
            this.velocity_x += xList[z];
            this.velocity_y -= yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x + 335, this.y - 179)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 5)
        {
            this.velocity_x += xList[z];
            this.velocity_y -= yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x + 379, this.y - 1)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 6)
        {
            this.velocity_x += xList[z];
            this.velocity_y += yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x + 345, this.y + 157)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 7)
        {
            this.velocity_x += xList[z];
            this.velocity_y += yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x + 105, this.y + 364)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 8)
        {
            this.velocity_x += xList[z];
            this.velocity_y += yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x + 248, this.y + 287)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 9)
        {
            this.velocity_x -= xList[z];
            this.velocity_y += yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x -54, this.y + 376)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 10)
        {
            this.velocity_x -= xList[z];
            this.velocity_y += yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x - 227, this.y + 304)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 11)
        {
            this.velocity_x -= xList[z];
            this.velocity_y += yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x - 344, this.y + 160)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 12)
        {
            this.velocity_x -= xList[z];
            this.velocity_y += yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x + this.velocity_x, this.y + this.velocity_y, this.x - 379, this.y - 5)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
        if(z == 13)
        {
            this.velocity_x -= xList[z];
            this.velocity_y -= yList[z];
            if(keyIsPressed && (key === 'z'))
            {
                this.d = dist(this.x - 334, this.y - 159, this.x + this.velocity_x, this.y + this.velocity_y)
                if(this.d < this.r)
                {
                    push()
                    this.y -= 100000;
                    this.x += 100000;
                    S += 100;
                    pop()
                }
            }
        }
    }
}

class Lines {
        constructor()
        {
            this.x = width/2
            this.y = height/2
            this.a = 15
            this.H = 0;
            this.S = 0;
            this.L = 100;
        }
        path(z1)
        {
            if(z1 >= 0 && z1 <= 13)
            {
                push()
                stroke(this.H, this.S, this.L, this.a)
                strokeWeight(4);
                line(this.x + (x1List[z1]), this.y + (y1List[z1]), this.x, this.y)
                pop()
            }
        }
    }