// animation
let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".component__icon");

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}

if (window.screen.width >= 768) {
  for (let elm of elements) {
    observer.observe(elm);
  }
}
// END
