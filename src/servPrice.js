const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 1.2,
	spaceBetween: 16,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slideToClickedSlide: true,
	centeredSlides: true,
})