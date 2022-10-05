window.sr = ScrollReveal({ reset: true });

sr.reveal(".section1", { duration: 1000 });
sr.reveal(".grid-section1", { duration: 2500 });
sr.reveal(".img-reveal", { interval: 300 });
sr.reveal(".caneca-img", { delay: 300, distance: "-50px" });
sr.reveal(".section2", { duration: 1500 });
sr.reveal(".section3", { duration: 1500 });
sr.reveal(".section4", { duration: 1500 });

// CARROSSEL
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    510: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
