let menuMobile = document.querySelector(".menu-mobile")
let links = document.querySelector(".links")

let check = false;

menuMobile.addEventListener("click", ()=>{

    (check) ? check = false : check = true;

    (check) ? document.querySelector("body").style.overflowY = "hidden" : document.querySelector("body").style.overflowY = "visible"

    links.classList.toggle("-active")
    console.log(check)
})