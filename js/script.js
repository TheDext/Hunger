let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}

let header = document.querySelector('.header');
let headerTop = header.getBoundingClientRect().top + pageYOffset;
let headerHeight = document.querySelector('.header').offsetHeight;
let headerBottom = headerTop + headerHeight;

document.addEventListener('scroll', function (e) {
   if (pageYOffset > headerTop + headerHeight / 2) {
      header.classList.add('_fixed');
   } else {
      header.classList.remove('_fixed');
   }
})

// скролл до About
let arrowDown = document.querySelector('.mainscreen__arrow-down');
const about = document.getElementById('about');
if (arrowDown) {
   arrowDown.addEventListener('click', scroll);
   function scroll() {
      about.scrollIntoView({behavior: "smooth"});
   }
}
// скролл до Team
let teamLink = document.querySelector('.header__link_team');
const team = document.getElementById('team');
if (teamLink) {
   teamLink.addEventListener('click', function (e) {
      e.preventDefault();
      team.scrollIntoView({behavior: "smooth"});
   });
}
// скролл до Booking
let bookingLink = document.querySelector('.header__link_booking');
const booking = document.getElementById('book');
if (bookingLink) {
   bookingLink.addEventListener('click', function (e) {
      e.preventDefault();
      booking.scrollIntoView({behavior: "smooth"});
   });
}
// скролл до Menu
let menuLink = document.querySelector('.header__link_menu');
const menu = document.getElementById('menu');
if (menuLink) {
   menuLink.addEventListener('click', function (e) {
      e.preventDefault();
      menu.scrollIntoView({behavior: "smooth"});
   });
}
// скролл до Galerie
let gallaryLink = document.querySelector('.header__link_galerie');
const gallary = document.getElementById('gallary');
if (gallaryLink) {
   gallaryLink.addEventListener('click', function (e) {
      e.preventDefault();
      gallary.scrollIntoView({behavior: "smooth"});
   });
}
// скролл до Events
let eventsLink = document.querySelector('.header__link_events');
const events = document.getElementById('events');
if (eventsLink) {
   eventsLink.addEventListener('click', function (e) {
      e.preventDefault();
      events.scrollIntoView({behavior: "smooth"});
   });
}
// скролл до Contact
let contactLink = document.querySelector('.header__link_contact');
const contact = document.getElementById('contact');
if (contactLink) {
   contactLink.addEventListener('click', function (e) {
      e.preventDefault();
      contact.scrollIntoView({behavior: "smooth"});
   });
}
// скролл до Home
let homeLink = document.querySelector('.header__link_home');
const home = document.getElementById('home');
if (homeLink) {
   homeLink.addEventListener('click', function (e) {
      e.preventDefault();
      home.scrollIntoView({behavior: "smooth"});
   });
}
// скролл до About
let aboutLink = document.querySelector('.header__link_about');
if (aboutLink) {
   aboutLink.addEventListener('click', function (e) {
      e.preventDefault();
      about.scrollIntoView({behavior: "smooth"});
   });
}



let inp = document.getElementById('contactName');
inp.oninvalid = function(event) {
   event.target.setCustomValidity('Не тупи!');
}



// var elements = document.getElementsByClassName('input_tel');
// for (var i = 0; i < elements.length; i++) {
//   new IMask(elements[i], {
//     mask: '+{7} (000) 000-00-00',
//   });
// }

// скролл до точки
// let arrowDown = document.querySelector('.mainscreen__arrow-down');
// const about = document.getElementById('about');
// if (arrowDown) {
//    arrowDown.addEventListener('click', scroll);
//    function scroll() {
//       about.scrollIntoView({behavior: "smooth"});
//    }
// }


