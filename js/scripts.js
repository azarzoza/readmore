$('article').readmore({
	moreLink: '<a href="#"><em>Open Sesame</em> </a>',
	lessLink: '<a href="#">Adios</a>',
	speed: 2000,
	afterToggle: function() {
		alert('Im hiding, find me meow!');
	}
});