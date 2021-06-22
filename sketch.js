function preload(){
  spaceBG = loadImage("Docking-undocking/spacebg.jpg");
  spaceshipImg1 = loadImage("Docking-undocking/spacecraft1.png");
  spaceshipImg2 = loadImage("Docking-undocking/spacecraft2.png");
  spaceshipImg3 = loadImage("Docking-undocking/spacecraft3.png");
  spaceshipImg4 = loadImage("Docking-undocking/spacecraft4.png");
  issimg = loadImage("Docking-undocking/iss.png")
}

function setup() {
  createCanvas(800,400);
  
  ISSprite = createSprite(400, 200, 10, 10);
  ISSprite.addImage("issprite", issimg);
  ISSprite.scale = 0.75;

  spawnSpaceship();

  destination = createSprite(350,220,30,10);
  destination.shapeColor = "White";
  destination.visible = false;
}
  
function draw() {  

  if(SShip.isTouching(destination)){
    background("White")

    if(keyDown("up")){
      SShip.addImage("Spaces", spaceshipImg2);
      SShip.y -= 5;
    }
    
    if(keyDown("down")){
      SShip.addImage("spaces", spaceshipImg1);
      SShip.y += 5;
    }
    
    if(keyDown("left")){
      SShip.addImage("spaceS", spaceshipImg3);
      SShip.x -= 5;
    }
    
    if(keyDown("right")){
      SShip.addImage("SpaceSh", spaceshipImg4);
      SShip.x += 5;
    }
    SShip.visible = false;
    ISSprite.visible = false;

    fill("Black");
    textSize(75);
    text("Docking Successful!", 60, 200);
  }

  else{
    background(spaceBG);

    if(keyDown("up")){
      SShip.addImage("Spaces", spaceshipImg2);
      SShip.y -= 2.5;
    }
    
    if(keyDown("down")){
      SShip.addImage("spaces", spaceshipImg1);
      SShip.y += 2.5;
    }
    
    if(keyDown("left")){
      SShip.addImage("spaceS", spaceshipImg3);
      SShip.x -= 2.5;
    }
    
    if(keyDown("right")){
      SShip.addImage("SpaceSh", spaceshipImg4);
      SShip.x += 2.5;
    }
  }
  drawSprites();
}

function spawnSpaceship(){
  var r = random(25,775);
  SShip = createSprite(r, 350, 10, 10);
  SShip.addImage("SpaceS", spaceshipImg1);
  SShip.scale = 0.15;
}