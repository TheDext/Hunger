/* == HTML ==

	<div class="spollers-block _spollers _one">
		<div class="spollers-block__item">
			<div class="spollers-block__title _spoller">Заголовок</div>
			<div class="spoller-block__body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dignissimos veniam quae modi incidunt provident nesciunt quaerat quia iusto iste reiciendis, minima doloremque fugit. Commodi eveniet magnam dicta consectetur eaque!</div>
		</div>
	</div>

	== CSS ==

*/



let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}

//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spollersGo) {
				spollersGo = false;
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				_slideToggle(spoller.nextElementSibling);

				setTimeout(function () {
					spollersGo = true;
				}, 500);
			}
		});
		if (spoller.classList.contains('_active')) {
			_slideToggle(spoller.nextElementSibling);
		}
	}

}
//=================



















// //Споллер на JQUERRY =======================================================


// $(document).ready(function() {
// 	$('.mainscreen-body__extended').click(function(event) {
// 		if($('.mainscreen__body').hasClass('one')){
// 			$('.mainscreen-body__extended').not($(this)).removeClass('active');
// 			$('.mainscreen-body__hide').not($(this).next()).slideUp(300);
// 		}
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });

// // $(document).ready(function() {
// // 	$('.humans-content__title').click(function(event) {
// // 		if($('.humans-content').hasClass('one')){
// // 			$('.humans-content__title').not($(this)).removeClass('active');
// // 			$('.humans-content__hide').not($(this).next()).slideUp(300);
// // 		}
// // 		$(this).toggleClass('active').next().slideToggle(300);
// // 	});
// // });

// // =======================================================