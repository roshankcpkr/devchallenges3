const hamburger = document.querySelector(".hamburger")
const crossMark = document.querySelector(".crossmark")
const menuOverlay = document.querySelector('.mobile_nav')


function overlayMenu() {
    menuOverlay .style.display = "flex";
}

function closeOverlay() {
    menuOverlay .style.display = "none";
}


hamburger.addEventListener("click", overlayMenu)
crossMark.addEventListener("click", closeOverlay)