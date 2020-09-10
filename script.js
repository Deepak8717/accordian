(function(){
	var d = document;
	var ul = d.querySelector(".according-list");
	var h4s = d.querySelectorAll('h4');

	ul.addEventListener('click', function(e){
		for(var i=0; i<h4s.length; i++){
			h4s[i].classList.remove('active');
		}
		e.target.classList.toggle('active');
	});
})();