/*=============== SHOW MENU ===============*/
const navMenu =  document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

    /* Menu show */ 
    if (navToggle) {
        navToggle.addEventListener("click", ()=>{
            navMenu.classList.add("show-menu")
        })
    } 
    /* Menu hidden */ 
    if(navClose) {
        navClose.addEventListener("click", ()=>{
            navMenu.classList.remove("show-menu")
        })
    }  

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    //When nav__link clicked remove show-menu.
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50  ? header.classList.add("blur-header")
                        : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"), 
    contactMessage = document.getElementById("contact-message")
    
    const sendEmail = (e) =>
        e.preventDefault();

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
