class Hammer{
constructor(x,y,width,height){
var options = {
friction = 1.0
}
this.body = Bodies.rectange(x,y,width,height,options)
this.width = width;
this.height = height;
World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    translate(posX,posY);
    rectMode(CENTRE);
    fill('red');
    rect(0,0,this.width,this.height);
    


}
}

