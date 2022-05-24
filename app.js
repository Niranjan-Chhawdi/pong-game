var playerPaddle , computerPaddle , ball;

var computerScore = 0 , playerScore = 0 ;

var gameState = "serve";



function setup() {
  createCanvas(400,400);
  playerPaddle = createSprite(380,190,10,70);
  computerPaddle = createSprite(10,190,10,70);
  ball = createSprite(200,200,10,10)

  edges = createEdgeSprites();
  
}

function draw() {
  background("white");

  if(gameState === "serve"){
    text("Press Space to Serve" , 150 , 180);
  }

  drawnet();

  //ball
  if(keyDown("space") && gameState === "serve"){
    serveball();
    gameState = "play";
  }
  

  if (gameState === "play") {
    //playerPaddle
  playerPaddle.x = 380;
  playerPaddle.y = World.mouseY;
  playerPaddle.collide(edges[3]);
  playerPaddle.collide(edges[2]);

  //computerPaddle
  computerPaddle.x = 10;
  computerPaddle.y = ball.y;

  if(ball.x > 400 || ball.x < 0){
    if(ball.x > 400){
      computerScore = computerScore + 1;
    }
    if(ball.x < 0){
      playerScore = playerScore + 1;
    }
    // computerPaddle.x = 10;
    // computerPaddle.y = 190;
    resetball();

    // gameState = "serve";
  }
  }

  
  

  

  

  text(playerScore , 210 , 10);
  text(computerScore , 185 , 10);
  
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);

  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);

  if (playerScore === 2 || computerScore === 2) {
    text("Game Over!",170 , 160);
    text("Press 'R' to Restart",150 , 180);
    gameState = "over";
  }

  if(keyDown("r") && gameState === "over") {
    computerScore = 0;
    playerScore = 0;
    gameState = "serve";
  }

  drawSprites();
}

function drawnet() {
  for (var num = 0 ; num < 400; num = num + 20){
    line(200 , num , 200 , num + 10);
  }
}

function serveball() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function resetball() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;

  gameState = "serve"
}