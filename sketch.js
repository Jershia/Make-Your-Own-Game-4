var canvas, backgroundImage;
var gameState = 0;
//var distance = 0;
var database;
var block1,block2,block3,block4;
var block5,block6,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17;
var block18,block19,block20,block21,block21,block22,block23,block24;
var player1,player2,player3,player4;
var tank1,tank2,tank3,tank4;
var tank1Left,tank2Left,tank3Left,tank4Left;
var tank1Right,tank2Right,tank3Right,tank4Right;
var tank1Down,tank2Down,tank3Down,tank4Down;
var players;
var allPlayers;
var game,form,player;
var playerCount;
var xD,yD

function preload(){
 tank1 = loadImage("images/tank1_up.png");
 tank2 = loadImage("images/tank2_up.png");
 tank3 = loadImage("images/tank3_up.png");
 tank4 = loadImage("images/tank4_up.jpg");

 tank1Left = loadImage("images/tank1_left.png");
 tank2Left = loadImage("images/tank2_left.png");
 tank3Left = loadImage("images/tank3_left.png");
 tank4Left = loadImage("images/tank4_left.jpg");
 
 tank1Right = loadImage("images/tank1_right.png");
 tank2Right = loadImage("images/tank2_right.png");
 tank3Right = loadImage("images/tank3_right.png");
 tank4Right = loadImage("images/tank4_right.jpg");
 
 tank1Down = loadImage("images/tank1_down.png");
 tank2Down = loadImage("images/tank2_down.png");
 tank3Down = loadImage("images/tank3_down.png");
 tank4Down = loadImage("images/tank4_down.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth - 50, displayHeight-25);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  //text(mouseX + "," + mouseY,mouseX,mouseY);
  drawSprites();
}
