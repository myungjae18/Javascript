/*마스게임에 사용될 판넬 한 개를 정의한다
	이 패널은 마우스를 올려놓으면 opacity 값이 0에 가워져서 결국 투명하게 된다..(부드럽게)
*/
class Box{
	constructor(container,width,height,bg){
		this.a=0.1; //비율 계수: 부드러운 정도(기울기)
		this.targetOp=1.0; //목표지점

		this.div=document.createElement("div");
		this.div.style.width=width+"px";
		this.div.style.height=height+"px";
		this.div.style.background=bg;
		this.div.style.opacity=1; //불투명
		this.div.style.float="left";
		container.appendChild(this.div);
		//ES6에서 익명 함수 내에서 this를 사용할 경우 현재 객체를 가리키는 게 아니라, 익명함수 자체를 가리키게 되는 문제가 발생하는데, 이 때 사용할 수 있는 함수를 가리켜 화살표 함수라 한다...
		this.div.addEventListener("mouseover", ()=>{
			this.targetOp=0.0;
		});
	}
	//화면에 어떻게 그려질지를 결정하는 메서드
	render(){
		this.div.style.opacity=parseFloat(this.div.style.opacity)+this.a*(this.targetOp-parseFloat(this.div.style.opacity));
	}
}