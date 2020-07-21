var canvas;
var spacecraft,spaceCraft_Img;
var spaceCraft_Img2;
var startText,startTextI;
var playButton,playButtonI;
var chooseButton,chooseButtonI;
var spacecraftchoose1,spacecraftchoose2
var canvasImage;  
var shootButton,shootButtonImg;
var obstacle1Group;
var obstacle2Group;
var obstacle3Group;
var endingText,endingTextImg;
var obstacle1Img;
var obstacle2Img;
var obstacle3Img;
var bulletGroup;
var resetButtonImg;
var backButton,backButton_img;
var bullet;
var buttonrightImg;
var buttonleftImg;
var gameState = 0;
var play = 1;
var end = 2;
var score = 0;
//var buttonImg;
function preload(){
    spaceCraft_Img = loadImage("./sprite_0.png");
    spaceCraft_Img2 = loadImage("./galaxian2.png");
    canvasImage = loadImage("./background.png");
    buttonImg = loadImage("./pngwave.png");
    obstacle1Img = loadImage("./enemy1.png");
    obstacle2Img = loadImage("./enemy2.png");
    obstacle3Img = loadImage("./enemy3.png");
    startTextI = loadImage("./STARTER.png");
    playButtonI = loadImage("./PLAYBUTTON.png");
    chooseButtonI = loadImage("./chooseButto.png");
    backButton_img = loadImage("./back.png");
    shootButtonImg = loadImage("./SHOOT.png");
    buttonrightImg = loadImage("./RIGHT.png");
    buttonleftImg = loadImage("./LEFT.png");
    endingTextImg = loadImage("./OVER.png");
    resetButtonImg = loadImage("./Reset.png");
}
    

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    spacecraft = createSprite(displayWidth/2,displayHeight-100,100,100);
    spacecraft.addImage(spaceCraft_Img2);
    startText = createSprite(displayWidth/2,displayHeight-500,50,50);
    startText.addImage(startTextI);
    endingText = createSprite(displayWidth/2,displayHeight-500,50,50);
    endingText.addImage(endingTextImg);
    playButton = createSprite(displayWidth/2 ,displayHeight-300,50,50);
    playButton.addImage(playButtonI);
    resetButton = createSprite(displayWidth/2,displayHeight-300,50,50);
    resetButton.addImage(resetButtonImg);
    shootButton = createSprite(displayWidth-100,displayHeight-300,50,50);
    shootButton.addImage(shootButtonImg);
  //  chooseButton = createSprite(displayWidth/2+200,displayHeight-300,50,50);
   // chooseButton.addImage(chooseButtonI);
  //  spacecraftchoose1 = createSprite(displayWidth/2 -300,displayHeight-500,50,50);
   // spacecraftchoose1.addImage(spaceCraft_Img);
    //spacecraftchoose2 = createSprite(displayWidth/2+200,displayHeight-500,50,50);
   // spacecraftchoose2.addImage(spaceCraft_Img2);
   // backButton = createSprite(displayWidth/2-550,displayHeight-700,50,50);
   // backButton.addImage(backButton_img);
    spacecraft.setCollider('circle',2,10,50);
   // spacecraft.debug = true;
    //buttonright = createButton("right");
   // buttonleft = createButton("left");
    obstacle1Group = new Group();
    obstacle2Group = new Group();
    obstacle3Group = new Group();
    bulletGroup = new Group();
    buttonright = createSprite(displayWidth -90,displayHeight-100,20,20);
    buttonright.addImage(buttonrightImg);
    buttonleft = createSprite(50,displayHeight-100,20,20);
    buttonleft.addImage(buttonleftImg);
}

function draw(){
    background(canvasImage);
    spacecraft.scale = 0.8;
   // spacecraftchoose1.visible = false;
   // spacecraftchoose2.visible = false;
   // backButton.visible = false;
   // console.log(gameState);
   shootButton.visible = false;
   buttonright.visible = false;
   buttonleft.visible = false;
   endingText.visible = false;
   resetButton.visible = false;
if(gameState === 0){
  if(touches.length>0 || mousePressedOver(playButton)){//spacebar
    gameState = play;
    startText.velocity.y = 3;
    playButton.velocity.y = 3;
    //chooseButton.velocity.y=3;
    touches = [];
  }
  //if(touches.length>0 ||mousePressedOver(chooseButton)){//letter S
    //startText.visible = false;
   // playButton.visible = false;
   // chooseButton.visible = false;
    //spacecraft.visible = false;
  //  spacecraftchoose1.visible = true;
  //  spacecraftchoose2.visible = true;
  //  backButton.visible = true;
    //touches = [];
    //}
 //   if(touches.length>0||mousePressedOver(backButton)){//letter B
    //  spacecraftchoose1.visible = false;
      //spacecraftchoose2.visible = false;
     // startText.visible = true;
    //  playButton.visible = true;
     // chooseButton.visible = true;
     // spacecraft.visible = true;
     // touches = [];
   // }
   //if(touches.length>0||mousePressedOver(spacecraftchoose1)){// LETTER A
   // spacecraft.addImage(spaceCraft_Img);
    //touches = []
   // }
    
    //if(touches.length>0||mousePressedOver(spacecraftchoose2)){// LETTER c
     // spacecraft.addImage(spaceCraft_Img2);
     // touches = []
    //}
    
}
obstacle1Group.debug = true;
obstacle2Group.debug = true;
obstacle3Group.debug = true;
    if(gameState === play){
    spawnobstacle1();
    spawnobstacle2();
    spawnobstacle3();
    shootButton.visible = true;
    buttonright.visible = true;
    buttonleft.visible = true;
  //  spacecraft.position.x = mouseX;
  stroke(255);
  textSize(30);
  text("SCORE:"+score,displayWidth/2-50,displayHeight-700)
 // buttonright.mousePressed(right);
 // buttonleft.mousePressed(left);
  //  buttonright.scale = 0.1;
  if(touches.length>0||mousePressedOver(shootButton)){
    spawnbullet();
    touches = [];
   }
   if( touches.length>0||mousePressedOver(buttonright)){
      spacecraft.position.x = spacecraft.position.x+60; 
      touches = [];
    }
    if( touches.length>0||mousePressedOver(buttonleft)){
      spacecraft.position.x = spacecraft.position.x-60; 
      touches = [];
    }
 if(bulletGroup.isTouching(obstacle1Group))
{
obstacle1Group.destroyEach();
bulletGroup.destroyEach();
score = score+100

}
if(bulletGroup.isTouching(obstacle2Group))
{
obstacle2Group.destroyEach();
bulletGroup.destroyEach();
score = score+60

}
if(bulletGroup.isTouching(obstacle3Group))
{
obstacle3Group.destroyEach();
bulletGroup.destroyEach();
score = score+30

}
if(spacecraft.position.x < displayWidth/2-500){
  spacecraft.position.x = spacecraft.position.x+200
}
if(spacecraft.position.x > displayWidth -120){
  spacecraft.position.x = spacecraft.position.x-200
}

}
if(spacecraft.isTouching(obstacle1Group)){
  gameState = end;
}
if(spacecraft.isTouching(obstacle2Group)){
  gameState = end;
}
if(spacecraft.isTouching(obstacle3Group)){
  gameState = end;
}
 if(gameState === end){
  obstacle1Group.setVelocityYEach(0);
  obstacle2Group.setVelocityYEach(0);
  obstacle3Group.setVelocityYEach(0);
  obstacle1Group.setLifetimeEach(-1);
  obstacle2Group.setLifetimeEach(-1);
  obstacle3Group.setLifetimeEach(-1);
 // obstacle1Group.destroyEach();
  //obstacle2Group.destroyEach();
 // obstacle3Group.destroyEach();
 // bullet.lifetime = 0;
 stroke(255);
 textSize(30);
 text("SCORE:"+score,displayWidth/2-50,displayHeight-700)
 shootButton.visible = true;
 buttonright.visible = true;
 buttonleft.visible = true;
 endingText.visible = true;
 resetButton.visible = true;
 if(mousePressedOver(resetButton)){
   reset();
 }
}
drawSprites();
//1. we want a spacecraft that should be controlled by the mouse
//2. we want a moving background 
//3. we want multiple obstacles of different types spawning at different places
}



function spawnbullet(){
  bullet = createSprite(spacecraft.position.x,spacecraft.position.y,3,20);
  bullet.shapeColor = "red";
 // strokeWeight(7);
  bullet.setCollider('circle',0,0,15)
  bullet.velocity.y = -3;
  bullet.lifetime = 700;
  bulletGroup.add(bullet);
  
}
function spawnobstacle1(){
  if(frameCount % 300 === 0){
    var obstacle1 = createSprite(random(10,displayWidth-120),0,50,50);
    obstacle1.addImage(obstacle3Img);
    obstacle1.setCollider('circle',0,0,30)
    obstacle1.velocity.y = (3 + 2*score/100);
    obstacle1.lifetime = 1000;
    obstacle1Group.add(obstacle1);
    
  }
}
function spawnobstacle2(){
  if(frameCount % 200=== 0){
    var obstacle2 = createSprite(random(10,displayWidth-120),0,50,50);
    obstacle2.addImage(obstacle2Img);
    obstacle2.setCollider('circle',0,0,30)
    obstacle2.scale = 0.6;
    obstacle2.velocity.y = (3 + 2*score/100);
    obstacle2.lifetime = 1000;
    obstacle2Group.add(obstacle2);
  
  }
}

function spawnobstacle3(){
  if(frameCount % 100 === 0){
    var obstacle3 = createSprite(random(10,displayWidth-120),0,50,50);
    obstacle3.addImage(obstacle1Img);
    obstacle3.setCollider('circle',0,0,30)
    obstacle3.scale = 0.5
    obstacle3.velocity.y = (4 + 2*score/100);
    obstacle3.lifetime = 1000;
    obstacle3Group.add(obstacle3);

  }
}
function reset(){
  gameState = play;
  obstacle1Group.destroyEach();
  obstacle2Group.destroyEach();
  obstacle3Group.destroyEach();
  resetButton.visible = false;
  score = 0;
}