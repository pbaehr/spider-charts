function SpiderPoint(x,name)
{
	this.curX = 0;
	this.targetX = x;
	this.name = name;
	this.updatePoint = updatePoint;
	this.speed = 6;
}

function updatePoint()
{
	if(this.curX != this.targetX)
	{
		this.curX += (this.targetX - this.curX) / this.speed;
		if(Math.abs(this.targetX - this.curX) < .1) this.curX = this.targetX;
	}
}