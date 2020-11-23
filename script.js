let nav = document.querySelector('.navigation');

nav.onclick = function(event) {
	let target = event.target;
	let isItem = target.className.contains(navigation__item);
	if (isItem == true) {
		target.classList.toggle('active');
	};

}