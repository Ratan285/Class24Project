class Stone{
    constructor(x,y,width,height){
    var options = {
    friction: 10,
    density:5,
    mass:50
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill('blue');
        rect(pos.x, pos.y, this.width,this.height);
    }
    }