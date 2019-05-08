/*다량의 공을 생성해야 하기 때문에 클래스로 정의해 놓자!!
class Ball{
	//태어날 때 갖추어야 할 초기값.. 즉 객체의 초기화
	constructor(container){
		this.x=0;	//공의 x좌표, 멤버변수(객체 소속 변수) : 전역변수가 아니라서 실망하지말자.. 이 변수는 이 공과 생명을 같이 하기에 공이 죽을 때까지는 그 값이 유지된다...
		this.y=0;	//공의 y좌표
		this.flagX=true;
		this.div=document.createElement("div");
		this.div.style.width=50+"px";
		this.div.style.height=50+"px";
		this.div.style.borderRadius=25+"px";
		this.div.style.background="red";
		this.div.style.position="absolute";
		this.div.style.left=0+"px";
		this.div.style.top=0+"px";
		//어디에 붙일지 결정하지 말자
		container.appendChild(this.div);
	}
	//공의 움직임을 제어하는 메서드..
	move(){
		if(this.flagX){
			this.x+=5;
		}else{
			this.x-=5;
		}
		if(x>=550 || x<=0){
			this.flagX=!this.flagX;
			this.y+=5;
		}else{
			this.y-=5;
		}
		this.div.style.innerText=this.x;
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
	}
}*/
/*다량의 공을 생성해야 하기 때문에
클래스로 정의해 놓자!!*/
class Ball{
	//태어날때 갖추어야할 초기값..즉 객체의 초기화
	constructor(container,background,X,Y){
		//x,y가 전역변수가 아니라서 실망X 
		//왜?? 이 변수는 이 공과 생명을 같이하기에, 공이 죽을때
		//까지는 그 값이 유지될 수 있다..
		this.x=0;//공의 x좌표, 멤버변수(객체소속 변수)
		this.y=0;//공의 y좌표, 멤버변수(객체소속 변수)
		this.flagX=true;

		this.div=document.createElement("div");
		this.div.style.width=50+"px";
		this.div.style.height=50+"px";
		this.div.style.borderRadius=25+"px";
		this.div.style.background=background;
		this.div.style.position="absolute";
		this.div.style.left=0+"px";
		this.div.style.top=0+"px";
		//어디에 붙일지 결정하지 말자
		container.appendChild(this.div);
	}	
	//공의 움직임을 정의하는 메서드...
	move(){
		if(this.flagX){
			this.x+=5;
		}else{
			this.x-=5;
		}
		if(this.flagX){
			this.y+=5;
		}else{
			this.y-=5;
		}
		if(this.x >=550 || this.x<=0){// flagX 참인동안은 우측이동
			this.flagX=!this.flagX;
			
		}
			
		
		if(this.y >=550 || this.y<=0){
			this.flagY=!this.flagY;
			
		}

		
		this.div.style.left=this.x+X+"px";		
		this.div.style.top=this.y+Y+"px";	
	}
}

