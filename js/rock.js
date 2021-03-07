class Rock{
constructor(w,h){
this.w = w;
this.h = h;
var options = {
    isStatic:false
}

this.body = Bodies.rectangle(500,Math.round(random(10,490)),this.w,this.h,options);
}

setVelocity(){
/*for(var i = 0; i>100;i = i - 1){
   this.body.position.x = this.body.position.x - 1
}*/
if(this.body.position.x>-30&& over === false){
    this.body.position.x = this.body.position.x - 10;
}
    



}

/*detectCollision(player){
   
    



}*/


display(){
var rockPosition = this.body.position;


push();
    translate(rockPosition.x,rockPosition.y);
    rectMode(CENTER)
   angleMode(RADIANS)
    fill("black")
    stroke(255)
    rect(0,0,this.w, this.h);
    pop();
    
}
};