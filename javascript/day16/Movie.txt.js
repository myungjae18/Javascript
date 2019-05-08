/*
현실의 영화 1편을 표현하는 '영화' 클래스 정의
*/
class Movie{
	/*
	변수 : 상태 (  데이터 ) 
	함수 : 나의 데이터를 제어하는 로직 코드
	*/
	constructor(id,container,width,height,data){
		this.id=id;//식별자가 생김!!
		this.container=container;
		this.width=width;
		this.height=height;
		this.title=data.title;
		this.url=data.url;
		this.category_name=data.category_name;
		this.release_year=data.release_year;
		this.running_time=data.running_time;
		this.budget=data.budget;
		this.gross=data.gross;
		this.youtube=data.youtube;

		this.img=document.createElement("img");
		this.img.src=this.url;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		//box 모델에서 다른 박스와의 간격은 margin 이다!!
		this.img.style.margin=2+"px";
		
		//이미지에 클릭 이벤트 구현하기 
		this.img.addEventListener("click", ()=>{
			//상세보기..
			//alert(this.id);
			pointerMove(this.id);
			getDetail(data);
		});
		this.container.appendChild(this.img);
		this.src=this.youtube;
	}
}





