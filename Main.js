const burger = document.getElementById("burger")
const menu = document.querySelector(".list");
const close = document.getElementById("close");

burger.addEventListener("click", function() {
  menu.style.display = "flex";
  burger.style.display = "none";
  close.style.display = "flex";
})

close.addEventListener("click", function() {
  menu.style.display = "none";
  burger.style.display = "flex";
  close.style.display = "none";
})