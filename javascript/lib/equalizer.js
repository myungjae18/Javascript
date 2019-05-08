class equalizer{
	constructor(container,X,targetH,width,height,left,border,top,bg){
		this.a=0.1;
		this.x=X;
		this.flagX=true;
		this.targetH=targetH;
		this.div=document.createElement("div");
		this.div.style.width=width+"px";
		this.div.style.height=height+"px";
		this.div.style.left=left+"px";
		this.div.style.float="left";
		this.div.style.border=border+"px solid white";
		this.div.style.top=top+"px";
		this.div.style.background=bg;
		container.appendChild(this.div);
		//ES6에서 익명 함수 내에서 this를 사용할 경우 현재 객체를 가리키는 게 아니라, 익명함수 자체를 가리키게 되는 문제가 발생하는데, 이 때 사용할 수 있는 함수를 가리켜 화살표 함수라 한다...
		
	}
	//화면에 어떻게 그려질지를 결정하는 메서드
	render(){		
		if(this.flagX){
			this.x+=5;
		}else{
			this.x-=5;
		}
		if(this.x >=300 || this.x<=0){
			this.flagX=!this.flagX;
		}
		this.div.style.height=this.x+"px";		
				
		/*if(this.targetH<300){
			this.div.style.height=parseFloat(this.div.style.height)+this.a*(this.targetH-parseFloat(this.div.style.height))+"px";
		}else{
			this.div.style.height=parseFloat(this.div.style.height)+this.a*(parseFloat(this.div.style.height)-this.targetH)+"px";	
		}
	}*/
	}
}