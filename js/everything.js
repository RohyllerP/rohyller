//navbar
function Menu(){
  var openNavbar = document.querySelector('#navbar-i');
	openNavbar.addEventListener('click',function(){
		document.querySelector('.contenedor-ul').classList.toggle('show-2');
});
}
Menu();
// boton subir
bottonUp = document.querySelector('.arrow-i-box');
bottonUp.addEventListener("click",scrollUp);
function scrollUp(){
	var subirScroll = document.documentElement.scrollTop;
	if (subirScroll > 0){
		  window.requestAnimationFrame(scrollUp);
		  window.scrollTo (0,subirScroll - (subirScroll / 10));
	}
}
window.onscroll = function(){
	 var scroll = document.documentElement.scrollTop;
	 if (scroll > 500){
	 		bottonUp.style.transform = "scale(1)";
	 }else if(scroll < 500){
	 	  bottonUp.style.transform = "scale(0)";
	 }
}

