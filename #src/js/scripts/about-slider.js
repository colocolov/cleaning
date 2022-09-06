// слайдер на главной
const aboutSlider = new Swiper(".about__slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  navigation: {
    nextEl: ".about__btn-next",
    prevEl: ".about__btn-prev",
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  on: {
    init() {
      this.el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });
      this.el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },
  //
});
//----- END
