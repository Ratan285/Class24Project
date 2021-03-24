class Iron{
    constructor(x, y, width, height){
    var options = {
    restitution: 0.3,
    friction: 5,
    density:4,
    mass: 50
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.height = height;
    this.width = width;
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill('pink');
        rect(pos.x, pos.y, this.width, this.height);
    }
    }