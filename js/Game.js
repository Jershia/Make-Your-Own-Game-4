class Game {
    constructor(){
      
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      player1 = createSprite(100,200,20,120);
     // player1.shapeColor = "green";
      player1.addAnimation("player1",tank1);
      player1.scale = 0.3;
      player1.visible = false;

      player2 = createSprite(300,200,20,20);
      player2.addAnimation("car2",tank2);
      player2.scale = 0.3;
      player2.visible = false;
      
      player3 = createSprite(500,200,20,20);
      player3.addAnimation("car3",tank3);
      player3.scale = 0.3;
      player3.visible = false;

      player4 = createSprite(700,200,20,20);
      player4.addAnimation("car4",tank4);
      player4.scale = 0.3;
      player4.visible = false;

      players = [player1,player2,player3,player4];
      player1.debug = true;
      player2.debug = true;
      player3.debug = true;
      player4.debug = true;

    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
     // player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        background("#373A3C");

        player1.visible = true;
        player2.visible = true;
        player3.visible = true;
        player4.visible = true;

        block1 = createSprite(displayWidth - 50,displayHeight - 40,10000,25);
        block1.shapeColor = "#0C81CD";
        block2 = createSprite(10,10,10000,25);
        block2.shapeColor = "#0C81CD";
        block3 = createSprite(10,10,25,10000);
        block3.shapeColor = "#0C81CD";
        block4 = createSprite(1220,10,25,10000);
        block4.shapeColor = "#0C81CD";
        block5 = createSprite(10,200,250,25);
        block5.shapeColor = "#0C81CD";
        block6 = createSprite(10,450,250,25);
        block6.shapeColor = "#0C81CD";
        block7 = createSprite(400,10,25,250);
        block7.shapeColor = "#0C81CD";
        block8 = createSprite(800,10,25,250);
        block8.shapeColor = "#0C81CD";
        block9 = createSprite(1220,200,250,25);
        block9.shapeColor = "#0C81CD";
        block10 = createSprite(1220,450,250,25);
        block10.shapeColor = "#0C81CD";
        block11 = createSprite(400,650,25,200);
        block11.shapeColor = "#0C81CD";
        block12 = createSprite(800,650,25,200);
        block12.shapeColor = "#0C81CD";
        block13 = createSprite(480,310,25,150);
        block13.shapeColor = "#0C81CD";
        block14 = createSprite(650,220,150,25);
        block14.shapeColor = "#0C81CD";
        block15 = createSprite(810,310,25,150);
        block15.shapeColor = "#0C81CD";
        block16 = createSprite(650,220,150,25);
        block16.shapeColor = "#0C81CD";
        block17 = createSprite(650,420,150,25);
        block17.shapeColor = "#0C81CD";
        block18 = createSprite(250,360,120,25);
        block18.shapeColor = "#0C81CD";
        block19 = createSprite(320,313,25,120);
        block19.shapeColor = "#0C81CD";
        block20 = createSprite(1000,360,120,25);
        block20.shapeColor = "#0C81CD";
        block21 = createSprite(940,312,25,120);
        block21.shapeColor = "#0C81CD"; 
        //var display_position = 100;
        if(player1.collide(block1)||player1.collide(block2)||player1.collide(block3)||player1.collide(block4)||player1.collide(block5)||player1.collide(block6)||player1.collide(block7)||player1.collide(block8)||player1.collide(block9)||player1.collide(block10)||player1.collide(block11)||player1.collide(block12)||player1.collide(block13)||player1.collide(block14)||player1.collide(block15)||player1.collide(block16)||player1.collide(block17)||player1.collide(block18)||player1.collide(block19)||player1.collide(block20)||player1.collide(block21)){
          player1.velocityX = 0;
          player1.velocityY = 0;
        }
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var xP = 0;
        var yP = 0;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          //x = x + 200;
          //console.log(allPlayers[plr]);
          //use data form the database to display the cars in y direction
          xP = allPlayers[plr].xD;
          xP = xP + 150;
          yP = displayHeight - allPlayers[plr].yD;
          console.log(players);
          players[index-1].x = xP;
          players[index-1].y = yP;
         // console.log(index, player.index)
  
         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(xP,yP,10,10);
            players[index - 1].shapeColor = "red";
            camera.position.x = players[index-1].xD;
            camera.position.y = players[index-1].yD;

           }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      console.log(player);
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        //player.changeImage("")
        player.y +=10
        //player.x = 0
        player.update();
      }

      if(keyIsDown(DOWN_ARROW) && player.index !== null){
       // player.changeAnimation("player1",tank1Down);
        player.y -=10
       // player.x = 0
        player.update();
      }

      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.x -=10
       // player.y  = 0 
        player.update();
      }

      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.x +=10
       // player.y = 0
        player.update();
      }
  
     /* if(player.distance > 3860){
        gameState = 2;
        player.rank++;
        Player.updateCarsAtEnd(player.rank);
      }i*/
     
      drawSprites();
    }
  
    /*end(){
      console.log("Game Ended");
      alert(player.rank);
    }*/
  }
  