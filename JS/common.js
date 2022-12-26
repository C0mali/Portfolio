const header = document.querySelector("header");

//================================
//scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY >= 60) {
    header.style.top = "0px";
  } else {
    header.style.top = "-93px";
  }
});