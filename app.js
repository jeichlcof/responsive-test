const hamburger = document.querySelector(".fa-bars");
const menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function menuAppear() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "130px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

hamburger.addEventListener("click", menuAppear);
