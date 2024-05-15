const navIcon = document.getElementById("nav_icon");
const navBtn = document.getElementsByTagName("nav");
let a = document.getElementsByClassName("nav_new_list");
let show = 0;

nav_icon.addEventListener("click", function () {
  if (show == 0) {
    console.log("on");
    navBtn.classList.add(a);
    show = 1;
  } else if (show == 1) {
    console.log("off");
    show = 0;
  }
});
