class Hammer{
constructor(x,y,width,height){
var options = {
friction: 1.0
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
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill('red');
    rect(0,0,this.width,this.height);
}
}

