const link1 = document.getElementById('a_burger');
const link2 = document.getElementById('a_burger2');
const menu = document.getElementById('menu');
const linktacos1 = document.getElementsByClassName('tacos__produit')[0];
const recette1 = document.getElementsByClassName('produit__back')[0];
const linktacos2 = document.getElementsByClassName('tacos__produit')[1];
const recette2 = document.getElementsByClassName('produit__back')[1];
const linktacos3 = document.getElementsByClassName('tacos__produit')[2];
const recette3 = document.getElementsByClassName('produit__back')[2];
const linktacos4 = document.getElementsByClassName('tacos__produit')[3];
const recette4 = document.getElementsByClassName('produit__back')[3];

link1.onclick = e => {
	menu.style.display = "block";
	link1.style.display = "none";
}
link2.onclick = e => {
	menu.style.display = "none";
	link1.style.display = "block";
}

linktacos1.onclick = e =>{
	turn1(0);
}
recette1.onclick = e =>{
	setTimeout(function(){turn1(1);},601);
	}

function turn1(num){
	if (num == 0) {
		setTimeout(function(){linktacos1.classList.add('go');},10);
		setTimeout(function(){recette1.classList.add('go');},300);
		setTimeout(function(){linktacos1.classList.add('none');},600);
	}
	else
	{
		linktacos1.classList.remove("go");
		linktacos1.classList.remove("none");
		setTimeout(function(){recette1.classList.remove('go');},300);
	}
}

linktacos2.onclick = e =>{
	turn2(0);
}
recette2.onclick = e =>{
	setTimeout(function(){turn2(2);},602);
	}

function turn2(num){
	if (num == 0) {
		setTimeout(function(){linktacos2.classList.add('go');},20);
		setTimeout(function(){recette2.classList.add('go');},300);
		setTimeout(function(){linktacos2.classList.add('none');},600);
	}
	else
	{
		linktacos2.classList.remove("go");
		linktacos2.classList.remove("none");
		setTimeout(function(){recette2.classList.remove('go');},300);
	}
}

linktacos3.onclick = e =>{
	turn3(0);
}
recette3.onclick = e =>{
	setTimeout(function(){turn3(3);},603);
	}

function turn3(num){
	if (num == 0) {
		setTimeout(function(){linktacos3.classList.add('go');},30);
		setTimeout(function(){recette3.classList.add('go');},300);
		setTimeout(function(){linktacos3.classList.add('none');},600);
	}
	else
	{
		linktacos3.classList.remove("go");
		linktacos3.classList.remove("none");
		setTimeout(function(){recette3.classList.remove('go');},300);
	}
}

linktacos4.onclick = e =>{
	turn4(0);
}
recette4.onclick = e =>{
	setTimeout(function(){turn4(4);},304);
	}

function turn4(num){
	if (num == 0) {
		setTimeout(function(){linktacos4.classList.add('go');},40);
		setTimeout(function(){recette4.classList.add('go');},300);
		setTimeout(function(){linktacos4.classList.add('none');},300);
	}
	else
	{
		linktacos4.classList.remove("go");
		linktacos4.classList.remove("none");
		setTimeout(function(){recette4.classList.remove('go');},300);
	}
}