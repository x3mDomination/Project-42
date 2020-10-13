var hr, mt, sd;
var hrAngle,mtAngle,sdAngle;
var pm;

function setup() {
  createCanvas(800,600);
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(0);  

  translate(width/2,height/2);

  hr = hour();
  if(hr > 12){
    pm = true;
  }
  else {
    pm = false;
  }
  hr = hr%12;
  mt = minute();
  sd = second();

  sdAngle = map(sd, 0, 60, 0, 360);
  mtAngle = map(mt, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);
  //console.log(HALF_PI);

  for(var i = 0; i < 360; i += 30){
    push();
    stroke("green");
    rotate(i);
    strokeWeight(7);
    line(0,-210,0,-185);
    pop();
  }
  
  push();
  ellipseMode(CENTER);
  noFill();
  if(pm){
    stroke("blue");
  }
  else {
    stroke("red");
  }
  strokeWeight(7);
  arc(0,0,450,450,-90, hrAngle-90);
  pop();

  push();
  ellipseMode(CENTER);
  noFill();
  stroke(255);
  strokeWeight(7);
  arc(0,0,480,480,-90, mtAngle-90);
  pop();

  push();
  textSize(40);
  fill("cyan")
  text(":"+sd,-30,170);
  pop();

  push();
  textSize(40);
  if(pm){
    fill("blue");
    text("PM",-30,-140);
  }
  else {
    fill("red");
    text("AM",-30,-140);
  }
  pop();

  push();
  rotate(hrAngle);
  strokeWeight(7);
  if(pm){
    stroke("blue");
  }
  else {
    stroke("red");
  }
  line(0,0,0,-100);
  pop();

  push();
  rotate(mtAngle);
  stroke(255);
  strokeWeight(7);
  line(0,0, 0, -150);
  pop();
  
  

  //console.log(hr+":"+mt+":"+sd);

  drawSprites();
}