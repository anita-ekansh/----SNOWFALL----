class Drop{
    constructor(x,y,width,height){
        var options = {
            'fiction' : 0.1,
            'isStatic' : false,
            'restitution' : 0.1,           
             'density' : 0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("drop1.png");
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, -10, -10,40,40);
        pop();
    }
    update(){
        if(this.body.position.y>400){
           Matter.Body.setPosition(this.body,{x: random(-330,300),
           y: random(-0,0)})
         }
    }
}