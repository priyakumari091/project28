class Slingshot{
    constructor(body1,pB){

        
        var options = {
            stiffness : 0.004,
            length:8,
            bodyA: body1,
            pointB:pB
        }
        this.bodyA = body1;
        this.pointB = pB;
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }

    display(){
        push();
        if(this.slingshot.bodyA){
            var posA = this.bodyA.position;
            var pB = this.pointB;
            strokeWeight(5);
            line(posA.x,posA.y,pB.x,pB.y);
        }
        pop();
    }

    fly(){
        
        this.slingshot.bodyA = null;
    }

    attach(body){
        this.slingshot.bodyA = body;
    }
}