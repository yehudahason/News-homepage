const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const ulLinks = document.querySelector(".nav-links ul");
const body = document.querySelector("body");

openBtn.addEventListener("click", () => {
  navbar.classList.add("active");
  body.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
  body.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && e.target !== openBtn) {
    body.classList.remove("active");
    navbar.classList.remove("active");
  }
});
