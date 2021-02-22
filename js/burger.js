
/* ============ ВСТАВЛЯТЬ ПЕРЕД <nav class="header__menu"></nav>
<div class="header__burger">
	<span></span>
</div>
*/
let body = document.querySelector('body');
let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let headerPhone = document.querySelector('.header__phone');
if (headerBurger) {
		headerBurger.addEventListener('click', function(e){
			body.classList.toggle('_lock');
			headerBurger.classList.toggle('_active');
			headerMenu.classList.toggle('_active');
		});
};



/* ================ БУРГЕР НА JQUERRY =====================
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
*/