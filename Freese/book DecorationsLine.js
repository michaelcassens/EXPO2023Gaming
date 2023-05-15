class DecorationsLine
{
    constructor(x,y,a,b,color)
    {
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
        this.color = color;
    }

    display()
    {
        fill(this.color);
        line(this.x,this.y,this.a,this.b);
        
    }
}
