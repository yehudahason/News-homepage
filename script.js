const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");

openBtn.addEventListener("click", () => {
  navbar.classList.add("active");
  body.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  body.classList.remove("active");
});
