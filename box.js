class Box
  {
    constructor(x,y,w,h,vx,vy)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
      this.vx = vx;
      this.vy = vy;
    }
    
    show()
    {
      circle(this.x,this.y,this.w);
    }
    
    move()
    {
      this.x = this.x+this.vx;
    }

    moveUp()
    {
      this.y = this.y - this.vy;
    }
  }

  
