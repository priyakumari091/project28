class Stone {
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        
        var options ={
            "isStatic" : false,
            "restitution": 0,
            "friction":1,
            "density":1.2 
        }

        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world,this.body);
       // this.angle = this.body.angle;
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
      //  rotate(this.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();

    }
}