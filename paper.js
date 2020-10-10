class Paper {
  constructor(x,y,diameter){

      var options = {
          isStatic: false,
          restitution: 0.5,
          friction:1,
          density: 1.2
      }
      this.diameter = diameter
      this.body = Bodies.circle(x,y,diameter/3,options)
      this.image = loadImage("paperimage.png")
      World.add(world, this.body);
 
  }
  display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER)
      image(this.image,0,0,this.diameter,this.diameter)
      pop();
  }
}