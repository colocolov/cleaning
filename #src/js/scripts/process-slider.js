// слайдер на главной
const processSlider = new Swiper(".process__slider", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 800,
  navigation: {
    nextEl: ".process__btn-next",
    prevEl: ".process__btn-prev",
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
