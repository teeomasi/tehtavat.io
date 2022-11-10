const ToTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYoffset > 100) {
ToTop.classlist.add("active");
} else {
  ToTop.classList.remove ("active");
}
})
