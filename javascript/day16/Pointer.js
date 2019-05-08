/*썸네일 선택시, 그 썸네일을 가리킬 포인터
효과 사각형*/
class Pointer{
	constructor(container,x,y,width,height,velX,velY){
		this.container=container;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.velX=velX;
		this.velY=velY;
		this.a=0.1;
		this.targetX=0;
		this.div=document.createElement("div");
		this.div.style.border=2+"px solid blue";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.background="yellow";
		this.div.style.opacity=0.3;
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

		this.container.appendChild(this.div);
	}
	tick(){
		this.x=this.x + this.a*(this.targetX-this.x);
	}
	render(){
		this.div.style.left=this.x+"px";
	}
}