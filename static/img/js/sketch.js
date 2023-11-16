//sketch1 parameters
let angle = 1;
let graphics;
let love;
var timer = 105;
var t,t1='';
let fr = 30; 

//sketch3 parameters
var sizeDec=0.09,txtSize=100,cam,add=1,timer3 = 320,add1=0,cam2;

//sketch2
var timer2=120,check=120;


let device1 = {
    video: {
      deviceId: '8a9e1fca38a2e34e01e4ba659204c1c05b625a1481ae7ab6729adb885937cc1d'
    }
  };

let device2 = {
    video: {
      deviceId: 'ce5547930cb95b3238fa5290aad8e591457c4faf3bdc15d3de8d451ea966fa6b'
    }
  };

function setup() {
   createCanvas(1920,1080, WEBGL);
   frameRate(fr); 
  //print(frameCount);
  
  let fs = fullscreen();
  fullscreen(!fs);
  
 //  graphics = createGraphics(900,600);
   love = createGraphics(600,600); 
  hello = createGraphics(400,400);
  
  //graphics.fill(225,226,210);
  //graphics.textAlign(CENTER);
  //graphics.textSize(30);
  
  love.fill(225,226,210);
  love.textAlign(CENTER);
  love.textSize(25);
  
  hello.fill(225,226,210);
  hello.textAlign(CENTER);
  hello.textSize(txtSize);
}

function draw() {
  
  //print(timer);
  background(0);
  
  if (timer>0)
  sketch1();
  else if (timer2>0)
  {
    sketch2();
    //cam.clear();
  }
  else if (timer3>0)
  {
    sketch3();
    //cam.clear();
  }
}

function sketch1()
{
  background(0);
  //ambientLight(255);
  rotateX(angle*0.02);
  rotateY(angle*0.03);
  rotateZ(angle*0.04);
  angle = angle + 0.08;
 texture(love);
    box(800);
  //texture(graphics);
 // box(900,900,900);
  //noStroke();
  //ellipsoid(400,200,300);
  
  
  if (timer==105)
        t = 'You see a screen';
   else if (timer==90)
    t = 'These words';
   else if (timer==75)
    t = 'Where is this listening happening?';
   else if (timer==60)
    t = 'Where is this space?';
     else if (timer==45)
    t = 'Where does this space end?';
  else if (timer==30)
    t = 'Are you in this same space?';
  else if (timer==15)
    t = 'Is this space in your mind?';
    else if (timer==0)
    t = 'Is this space outside?';
  
    
 /* if (timer==50)
        t1 = 'You see a screen';
   else if (timer==40)
    t1 = 'These words';
   else if (timer==30)
    t1 = 'Where is this space?';
     else if (timer==20)
    t1 = 'Where does this space end?';
  else if (timer==10)
    t1 = 'Are you in this same space?';
  else if (timer==0)
    t1 = 'Is this space in your mind?';*/

  
 /*   if (timer==120)
        t1 = 'you see a screen ';
   else if (timer==10)
    t1 = '';
   else if (timer==40)
    t1 = 'whose there';
     else if (timer==80)
    t1 = 'whose there to hear the reading';
  else if (timer==60)
    t1 = 'where  ';
  else if (timer==40)
    t1 = 'Is this space in your mind?';
    else if (timer==20)
    t1 = 'Is this space outside?';*/

  //else if (timer==10)
    //t = 'hello';
    

    
    if (frameCount % 30 == 0) { 
     love.clear();
      //graphics.clear();

      timer --;     
      
   if (timer>0){
      love.text(t,200,200);
      //graphics.text(t1,100,100);
   }

  
  }
  
}

function sketch2()
{
  if (check==120){
    //cam.close();
    cam = createCapture(device1)
    cam.size(400,400);
  check--;
 }
  
   if (frameCount % 30 == 0)
     timer2--;
  
   ambientLight(255);
  
  
  background(0);
  rotateX(angle);
  rotateY(angle*0.3);
  rotateZ(angle*0.1);
  angle = angle + 0.009;
  
  
   noStroke(0);

  texture(cam);
  
  sphere(0.001+add1,3,10);
  //add++;
  add1=add1+0.3;
  
}


function sketch3() {
  
   check=120;
  
   if (frameCount % 30 == 0)
     timer3--;
  
     
     background(0);
  //print(txtSize);
  
  if (floor(txtSize)==0){
    txtSize--;
    hello.clear();
    cam2 = createCapture(device2);
    cam2.size(400,400);
    img = image(cam2,0-width/2,0-height/2);
  }
   else if (txtSize>0)
    drawHello();
  else
  {
   cam2.size(400,400);
  //  img = image(cam,0-width/2,0-height/2);
    explodingSpace();
  }

    
}

function drawHello()
{
  hello.text('HELLO',200,200);
  ambientLight(255);
  noStroke();
  texture(hello);
  plane(800,800);
  hello.textSize(txtSize);
  txtSize -= sizeDec;
  hello.clear();
}

function explodingSpace()
{
  rotateX(angle*0.02);
  rotateY(angle*0.03);
  rotateZ(angle*0.04);
  angle=angle+0.1;
  cam2.size(400,400);
  //img = image(cam,0-width/2,0-height/2);
   texture(cam2);
    box(add);
  add=add+ 0.3;
}
