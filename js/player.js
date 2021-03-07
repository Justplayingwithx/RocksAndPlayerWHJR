class Player{
constructor(x,y,w,h){
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;

    var options = {
        isStatic:true
    }
    
    this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);

    World.add(world,this.body)

}

keyDown(uod){
this.uod = uod;

if(this.uod === "up"){
    this.body.position.y = this.body.position.y - 5

}
else if(this.uod === "down"){
this.body.position.y = this.body.position.y + 5
}
}

display(){
    var thisPosition = this.body.position;

    push();
    translate(thisPosition.x,thisPosition.y);
    rectMode(CENTER)
   angleMode(RADIANS)
    fill("green")
    stroke("green")
    rect(0,0,this.w, this.h);
    pop();
}
};