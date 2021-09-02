let nav = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    nav.classList.add("new-color");
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("new-color");
    nav.classList.remove("fixed");
  }
});
