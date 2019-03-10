const nav = navigator.userAgent;

let mob = nav.indexOf('Mobi');
let chrome = nav.indexOf('Chrome');

let element = document.getElementsByClassName("barre");
console.log(element);

if ((mob > 0) && (chrome > 0)){
  	element[0].style.setProperty("--barre", "56px");
  	console.log('chrome');
}
if ((mob > 0) && (chrome < 0)){
  	element[0].style.setProperty("--barre", "0px");
  	console.log('default');
}