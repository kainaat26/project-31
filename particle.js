class Particle{
    constructor(x, y,radius) {
        var options = {
            isStatic:false,
            restitution: 0.2
                
            }
            this.radius = radius;
            this.body = Bodies.circle(x,y,radius,options);
            this.color = color(random(0.255),random(0,255),random(0,255));
            World.add(world,this.body);
          }
      
          display(){
            push();
            ellipseMode(RADIUS);
            ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
            
          }
         }