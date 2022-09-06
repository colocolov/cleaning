const scrWidth = window.screen.width;
const priceBtn = document.querySelector(".prices__btn");
const pricesContainer = document.querySelector(".prices__container");
const hygieneHead = document.querySelector(".hygiene__head");
const hygieneImg = document.querySelector(".hygiene__img");

const moveEl = function () {
  // move button on PRICE
  priceBtn.remove();
  pricesContainer.insertAdjacentHTML("beforeend", priceBtn.outerHTML);
  // move head title on HYGIENE
  hygieneHead.remove();
  hygieneImg.insertAdjacentHTML("beforeend", hygieneHead.outerHTML);
};

if (scrWidth <= 768) {
  moveEl();
}
