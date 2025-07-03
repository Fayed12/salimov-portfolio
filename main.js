const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const homeBodyScroll = document.querySelector('.home-body');

homeBodyScroll.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        homeBodyScroll.scrollLeft += e.deltaX; 
    } else {
        homeBodyScroll.scrollLeft += e.deltaY;
    }
});