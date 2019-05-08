/*현실에 존재하는 사물을 1회성이 아닌 대량으로 만들려면 물체 자체를 만들려 하지 말고 먼저 그 물체를 장차 만들어 낼 수 있는 틀을 고민하라*/
//변수,함수,문자,논리값
class Arrow{ //Arrow란 이름의 틀 생성
	//construnctor는 이미 명칭이 정해진 메서드이며 특히 생성자 메서드라 불린다.. 이 생성자 메서드는 거푸집으로부터 쇳물 붓는 순간 호출된다
	constructor(color,y,velX){
		//alert("쇳물 부었어");
		//this.span, this.x 등 this를 붙인 모든 변수는 이 객체와 생명을 같이 한다... 따라서 객체가 소멸될 때만 죽는다..
		this.span;
		this.x=0; //첫번째 화살의 속도
		this.velX=velX;
		this.span=document.createElement("span");
		//span은 inline 속성을 갖는다. padding 이 적용X
		this.span.innerText="→";
		this.span.style.fontSize=70+"px";
		this.span.style.color=color;
		this.span.style.position="absolute";
		this.span.style.left=0+"px";
		this.span.style.top=y+"px";
		document.body.appendChild(this.span);
	}
	//클래스 내에 정의된 함수는 해당 사물의 동작 방식을 결정한다고 하여 method라 한다....
	move(){
		this.x+=this.velX;
		this.span.style.left=this.x+"px";
	}
}