const more = document.querySelector(".about__more");
const text = document.querySelector(".about__text");

more.onclick = function () {
  console.log(text);
  text.classList.add("about__opened");

  if (text.style.height === "90px") {
    text.style.height = `${text.scrollHeight}px`;
  } else {
    text.style.height = `${text.scrollHeight}px`;
    window.getComputedStyle(text, null).getPropertyValue("height");
    text.style.height = "90";
  }

  // more.classList.add("unvisible");
  more.remove();
};
