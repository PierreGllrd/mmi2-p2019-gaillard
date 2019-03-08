const link1 = document.getElementById('a_burger');
const link2 = document.getElementById('a_burger2');
const menu = document.getElementById('menu');

link1.onclick = e => {
	menu.style.display = "block";
	link1.style.display = "none";
}
link2.onclick = e => {
	menu.style.display = "none";
	link1.style.display = "block";
}