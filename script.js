const navIcon = document.getElementById("nav_icon");

let show = 0;

nav_icon.addEventListener("click", function () {
  if (show == 0) {
    console.log("on");
    show = 1;
  } else if (show == 1) {
    console.log("off");
    show = 0;
  }
});
