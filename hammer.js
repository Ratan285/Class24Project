class Hammer{
constructor(x,y,width,height){
var options = {
friction: 1.0,
density:2,
restitution:0.5
}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height = height;
World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    rectMode(CENTER);
    fill('red');
    rect(pos.x, pos.y, this.width,this.height);
}
}

