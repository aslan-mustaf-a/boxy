var box1;
var box2;

function setup() 
{
  createCanvas(400, 400);

  box1 = new Box(100,200,20,20,2,3);
  box2 = new Box(200,230,25,30,3,4);
}

function draw() 
{
  background(220);

  box1.show();

  box1.move();

  box2.show();

  box2.moveUp();

}

