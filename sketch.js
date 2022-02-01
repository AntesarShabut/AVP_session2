const sketch = (s) => {
  let ball, block, g, speed, collision, padX, score, osc;
  const drawBall = () =>{
      s.fill("white");
      s.circle(0,0,20);               
  }

  const bounceX = () =>{
      ball.velocity.x = ball.velocity.x * -1 ;
  }
    
  const bounceY = () =>{
      ball.velocity.y = ball.velocity.y * -1;
  }
  const bounce = () => {
    if(ball.touching.bottom){
      bounceY();
      rotateBlocks();
      score++;

    }
    else if(ball.touching.top){
      bounceY();
      rotateBlocks();
      score++;

    }
    else{
      bounceX();
      rotateBlocks();
      score++;

    }
  }
  const rotateBlocks= () =>{
    block.rotation = Math.random()*100;
    block2.rotation = Math.random()*100;
    block3.rotation = Math.random()*100;
    block4.rotation = Math.random()*100;
    block5.rotation = Math.random()*100;
    block6.rotation = Math.random()*100;
    block7.rotation = Math.random()*100;
    block8.rotation = Math.random()*100;
  }
  function touchStarted() {
    getAudioContext().resume();
  }


  


  s.setup = () => {


      score =0;
      speed = 10;
      s.createCanvas(800,400);
      ball = s.createSprite(400, 200, 20, 20);
      ball.draw = drawBall;

      g = s.Group();

      block = s.createSprite(50, 100, 50, 50);
      block2 = s.createSprite(90, 200, 25, 25);
      block3 = s.createSprite(250, 125, 20, 50);
      block4 = s.createSprite(600, 220 , 40, 50);
      block5 = s.createSprite(425, 175, 60, 50);
      block6 = s.createSprite(500, 300, 15, 15);
      block7 = s.createSprite(600, 75, 20, 20);
      block8 = s.createSprite(550, 35, 40, 40);


      paddle = s.createSprite(25, 400, 150, 25); 

      g.add(block);
      g.add(block2);
      g.add(block3);
      g.add(block4);
      g.add(block5);
      g.add(block6);
      g.add(block7);
      g.add(block8);
    
      ball.setSpeed(speed, s.random(360));

  }

  s.draw = () => {

    s.background(0);
    s.drawSprites();
    s.textSize(24);
    s.textFont('monospace');
    s.fill('grey');
    s.text('score: ' + score, 10, 25);
    
    ball.collide(g, bounce);
    ball.collide(paddle, bounce);

    paddle.position.x = s.mouseX;
    
    if(ball.position.y > 400 ){
      ball.velocity.y = ball.velocity.y*-1;
      score = 0;

    }
    if(ball.position.y < 0){
      ball.velocity.y = ball.velocity.y*-1;

    }
    if(ball.position.x > 800){
      ball.velocity.x = ball.velocity.x*-1;
    }
    if(ball.position.x < 0){
      ball.velocity.x = ball.velocity.x*-1;
    }

  }
}

const sketchInstance = new p5(sketch);
