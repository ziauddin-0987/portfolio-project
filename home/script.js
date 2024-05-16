const navIcon = document.getElementById("nav_icon");
// const navBtn = document.getElementsByTagName("nav");
// let nav  = document.getElementsById("right");
let show = 0;

nav_icon.addEventListener("click", function () {
  if (show == 0) {
    console.log("on");
    navBtn.classList.add("right_side");
    show = 1;
  } else if (show == 1) {
    console.log("off");
    show = 0;
  }
});
