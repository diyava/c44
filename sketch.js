

var engine, world;
var card1


function setup() {
  createCanvas(800,700)

  card1=new Card(width/2, 100)
}

function draw() {
  card1.display();
  drawSprites();
}