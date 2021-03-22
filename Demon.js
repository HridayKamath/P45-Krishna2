class Demon extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,60,height,angle);
    this.image = loadImage("sprites/rakshas3.png");
    Matter.Body.setAngle(this.body, angle);
  }
}