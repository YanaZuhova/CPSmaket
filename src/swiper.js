const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');
const slider2 = document.querySelector('.swiper-container2');


let mySwiper = new Swiper(slider, {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: '.pag-1',
		clickable: true,
	},
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
});

let mySwiper1 = new Swiper(slider1, {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: '.pag-2',
		clickable: true,
	},
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
});

let mySwiper2 = new Swiper(slider2, {
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	pagination: {
		el: '.pag-3',
		clickable: true,
	},
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
});