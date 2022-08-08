import {classArray} from "./classData.js" 

const mainBody = document.querySelector('main')
const footerBody = document.querySelector('footer')
const logo = document.querySelector('.logo')
const menuIcon = document.querySelector('.hamburger')
let iconState = true


function checkClassArray()
{
    classArray.map((el)=>{
        return classChange(el.selectClass, el.changeClass)
    })
}

function displayElement(value)
{
    mainBody.style.display = value
    footerBody.style.display = value
    logo.style.display = value
}
function classChange(selectElement, newClass)
{
    document.querySelectorAll(selectElement).forEach(
        (el)=>{
            return iconState? el.classList.add(newClass) : el.classList.remove(newClass)
        }
    )
}

menuIcon.addEventListener("click" ,()=>{

    if (iconState){
        menuIcon.innerHTML = "&#10005;"
        checkClassArray()
        displayElement("none")
        iconState = false
    }
    else{
        menuIcon.innerHTML = "&#8801;"
        checkClassArray()
        displayElement("block")
        iconState = true
    }

})