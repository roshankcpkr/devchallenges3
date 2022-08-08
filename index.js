const menuItems = document.querySelector('.nav-items')
const menuIcon = document.querySelector('.hamburger')
const mainBody = document.querySelector('main')
const footerBody = document.querySelector('footer')
const logo = document.querySelector('.logo')
let iconState = true

function displayElement(value)
{
    mainBody.style.display = value
    footerBody.style.display = value
    logo.style.display = value
}
menuIcon.addEventListener("click" ,()=>{
    if (iconState){
        menuIcon.innerHTML = "&#10005;"
        menuIcon.classList.add("crossmark")
        menuItems.classList.add("newmenuItems")
        document.querySelector('header').classList.add('newHeader')
        document.querySelector('nav').classList.add("newNav")
        document.querySelectorAll('.menu-items').forEach(
            (el)=>{
                return el.classList.add('newnav')
            })
        displayElement("none")
        iconState = false
    }
    else{
        iconState = true
        menuIcon.innerHTML = "&#8801;"
        document.querySelector('header').classList.remove('newHeader')
        document.querySelector('nav').classList.remove("newNav")
        menuIcon.classList.remove("crossmark")
        document.querySelectorAll('.menu-items').forEach(
            (el)=>{
                return el.classList.remove('newnav')
            })
        menuItems.classList.remove("newmenuItems")
        displayElement("block")
    }

})