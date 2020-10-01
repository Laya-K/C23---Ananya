/*
class Ground{
    constructor(x,y,width,height){
        var groundOption = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,groundOption);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        push();
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}

*/

class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }