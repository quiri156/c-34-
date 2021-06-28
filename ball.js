class Ball{
    constructor(x,y,w,h){
       var  options={
           density:1,
   frictionAir:0.005,
   inertia:Infinity

       }
       this.body=Bodies.rectangle(x,y,w,h,options)
       this.width=w
       this.height=h
       World.add(world,this.body)

    }
    display(){
       push();
       translate(this.body.position.x,this.body.position.y)
       rotate(this.body.angle)
       ellipseMode(RADIUS)
       ellipse(0,0,this.width,this.height)
       pop();
    }
}