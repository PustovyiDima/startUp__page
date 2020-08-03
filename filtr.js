
function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}


function StartFilter(n){
	let menu=document.getElementsByClassName('menu__link')
	let elem=document.getElementsByClassName('single__work');
	let elem_brend=document.getElementsByClassName('Branding');
	let elem_design=document.getElementsByClassName('Design');
	let elem_dew=document.getElementsByClassName('Development');
	let elem_strat=document.getElementsByClassName('Strategy');
	let i =0;
	for( i = 0; i< menu.length; i++) {menu[i].className=menu[i].className.replace("ml__active","");}

	menu[n].className += " ml__active";

	for(let i = 0;  i < elem.length; i++){
			elem[i].style.display = "none";
		}
	elem[i].style.animation = null;

	let widht__elem = new Array();
	let k=0;


	
	switch(n){
		case 0: 
			for(let i = 0;  i < elem.length; i++){
				elem[i].style.display = "inline-block";
				elem[i].style.marginLeft ="30px";
			}

			 
			document.getElementById('works__types__list').style.width = "90%";

			break;
		case 1: 
			for(let i = 0;  i < elem.length; i++){
				elem[i].style.display = "none";
				elem[i].style.marginLeft ="30px";
				elem[i].style.animation = "opacity__move 2s ";

			}
			for(let i = 0;  i < elem_brend.length; i++){
				elem_brend[i].style.display = "inline-block";

			}


			check__numb__active__elem();

			break;
		case 2: 
			for(let i = 0;  i < elem.length; i++){
				elem[i].style.marginLeft ="30px";
				elem[i].style.animation = "opacity__move 2s ";
			}
			for(let i = 0;  i < elem_design.length; i++){
				elem_design[i].style.display = "inline-block";
			}
			check__numb__active__elem();
			break;
		case 3: 
			for(let i = 0;  i < elem.length; i++){
				elem[i].style.marginLeft ="30px";
				elem[i].style.animation = "opacity__move 2s ";
			}
			for(let i = 0;  i < elem_dew.length; i++){
				elem_dew[i].style.display = "inline-block";
			}
				check__numb__active__elem();
			break;
		case 4: 
			for(let i = 0;  i < elem.length; i++){
				elem[i].style.marginLeft ="30px";
				elem[i].style.animation = "opacity__move 2s ";
			}
			for(let i = 0;  i < elem_strat.length; i++){
				elem_strat[i].style.display = "inline-block";
			}
			check__numb__active__elem();
			break;
	}
	if(document.body.clientWidth <= 500){
			document.getElementById('works__types__list').style.width = "90%";
			for(let i = 0;  i < elem.length; i++){
				elem[i].style.margin ="5px";
				elem[i].style.animation = "opacity__move 2s ";
			}
			if(k % 2 == 1){
				document.getElementById('works__types__list').style.width = "75%";
			} 
	}


	function check__numb__active__elem(){
		
		for(i=0;i<elem.length;i++){
			console.log(elem[i].style.display);
			if(elem[i].style.display == "inline-block"){
				widht__elem.push(elem[i]);
				k++;
			} 
		}

		if(k % 2 !=1){
			console.log("widht__elem.length%2");
			document.getElementById('works__types__list').style.width = "75%";
		} else{
			document.getElementById('works__types__list').style.width = "90%";
		}

		if(document.body.clientWidth <= 500){
			document.getElementById('works__types__list').style.width = "90%";
			for(let i = 0;  i < elem.length; i++){
				elem[i].style.margin ="5px";
				elem[i].style.animation = "opacity__move 2s ";
			}
			if(k % 2 == 1){
				document.getElementById('works__types__list').style.width = "75%";} 
			}
		
		}
	

}


