class Tree {
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
       
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
            density : 1.2
        }

        this.image = loadImage("Plucking mangoes/tree.png");
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        
        World.add(world,this.body);
    }

        display(){

            var pos = this.body.position;
            push()
            imageMode(CENTER);
            translate(pos.x,pos.y);
            image(this.image,0,-150,600,600);
            pop();
        }
    }