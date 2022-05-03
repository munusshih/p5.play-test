var ball;
var walls;

function setup() {
  createCanvas(400, 400);
  background(50);

  ball = createSprite(width/2, height/2, 10, 10)
  ball.setSpeed(random(2, 3), random(0, 360));
  
  walls = new Group();
  
  top_wall = createSprite(height/2,5,width,10);
  top_wall.immovable = true;
  walls.add(top_wall);

  right_wall = createSprite(width - 5, height/2, 10, height);
  right_wall.immovable = true;
  walls.add(right_wall);

  left_wall = createSprite(5, height/2, 10, height);
  left_wall.immovable = true;
  walls.add(left_wall);

  bottom_wall = createSprite(width/2, height - 5, width, 10);
  bottom_wall.immovable=true;
  walls.add(bottom_wall);
}

function draw() {
  background(250)
  ball.bounce(walls);

  drawSprites();
}

//http://molleindustria.github.io/p5.play/examples/index.html?fileName=collisions4.js#