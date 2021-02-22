//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let slider_about = new Swiper('.slider-work', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 30,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	// Arrows
	navigation: {
		nextEl: '.about__more .more__item_next',
		prevEl: '.about__more .more__item_prev',
	},
	pagination: {
      el: '.works__dots',
       // Буллеты
         clickable: true,
      // Динамические буллеты
         dynamicBullets: true,
   },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});


/*
   // Стрелки | добавить в html .swiper-button-next, .swiper-button-prev (стандартный) 
   // navigation: {
   //    nextEl: '.swiper__next',
   //    prevEl: '.swiper__prev'
   // },

   // Навигация
       // Буллеты, текущее положение, прогреесбар |  дабвить .swiper-pagination (стандартный) в html
   pagination: {
      el: '.swiper-pagination',
       // Буллеты
         clickable: true,
      // Динамические буллеты
         dynamicBullets: true,
      // Прогрессбар | для кастомизации *класс_слайдера* .swiper-pagination-progressbar .swiper-pagination-progressbar-fill { *СТИЛИ* }
         // type: 'progressbar'
   },

   // Скролл  | для кастомизации *класс_слайдера* .swiper-scrollbar { *СТИЛИ* }
   scrollbar: {
      el: '.swiper-scrollbar',
         // Возможность перетаскивать скролл
      draggable: true
   },

   // Включение/Отключение перетаскивание на ПК
   simulateTouch: true,
   // Чувствительность свайпа
   tiuchRatio: 1,
   // Угол срабатывания свайпа/перетаскивания
   touchAngle: 45,
   // Курсор перетаскивани (меняет стрелку на руку)
   // grabCursor: true,
   // Переключение при клике на слайд
   slideToClickedSlide: true,
   // Управление клавиатурой
   keyboard: {
      enable: true,
      // управлять только тогда, когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // управлять с помощью PageUp/PageDown
      pageUpDown: true,
   },

   // Управление колесом мышки 
   // mousewheel: {
   //    // чувствительность колеса мышки
   //    sensitivity: 1,
   // },

   // Автовысота
   // autoHeight: true,

   // Количество слайдов на показ
   slidesPerView: 1, // (можно указать 2.2 или 'auto') при auto в css указать *имя_слайдера* .swiper-slide { width: auto;}
   // Отключение функционала, если недостаточно слайдов
   watchOverflow: true,


   slidesPerGroup: 1,   // Количество прокручиваемых слайдов

   // Отступ между сайдами 
   spaceBetween: 25,

   // Активный слайд по центру 
   centeredSlides: true,

   // С какого слайда начать 
   initialSlide: 1,

   // Бесконечный слайдер
   // loop: true, //(отключить скролл, мультирядность не раотает)

   // Свободный режим
   freeMode: false,

   // Автопрокрутка 
      // autoplay: {
      //    delay: 1000,
      //    // Закончить на последнем слейде
      //    stopOnLastSlide: true,
      //    // Отключить после ручного переключения
      //    disableOnInteraction: false,
      // }

   // Скорость
   speed: 300,

   // Вертикальный слайдер
   // direction: 'vertical', // ('horizontal)

   //Прозрачное изменение слайдов
      // effect: 'fade',
      //       //Дополнение к fade
      // fadeEffect: {
      //    //Параллельная смена прозрачности
      //    crossFade: true, //(включать вседа, пчти)
      // },

   // Эффекты переключения слайдов
         // Переворот
      effect: 'flip',
      //Дополнение к flip
      flipEffect: {
         //Тень
         slideShadow: true,
         //Показ только активного слайда
         limitRotation: true,
      },

   //Куб
      // effect: 'cube',
      // //Дополнение к cube
      // cubeEffect: {
      //    slideShadow: true,
      //    shadow: true,
      //    shadowOffset: 20,
      //    shadowScale: 0.94
      // },

   //coverflow 
      effect: 'coverflow',
      coverflowEffect: {
         //Наклон
         rotate: 30,
         //Наложение
         stretch: 70,
         slideShadow: false,
      },

   // АДАПТИВ
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slideShadow: 3,
      }
   },

   //Ленивая загрузка 
   //путь картинки указывается как data-src="img/01.jpg", добавить класс swiper-lazy
   // также в блок с картинкой добавить div с калссом swiper-lazy-preloader, для
   //щагрузки анимационной картинки загрузки

   //остановить предзагрузку всех картинок
   preloadImage: false,
   lazy: {
      loadOnTransmitionStart: false,
      loadPrevNext: false,
   },
});

 */