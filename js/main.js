/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When nav__link clicked remove show-menu.
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("blur-header")
                       : header.classList.remove("blur-header");
}
window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"), 
      contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();
    // serviceId - templateId - #form - publicKey
    emailjs.sendForm("service_5l5jxcc","template_qqfkusw","#contact-form","G00M8wGFrVpEii7ot")
    .then(() => {
        // Show send message
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
    }, () => { 
        // Show error message
        contactMessage.textContent = "Message not sent (...service error...) ❌";
    });
}
contactForm.addEventListener("submit", sendEmail);

/*=============== CURRENT YEAR ===============*/ 
document.getElementById("current-year").textContent = new Date().getFullYear();

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 500 viewport height, add the show-scroll class
    this.scrollY >= 500 ? scrollUp.classList.add("show-scroll")
                        : scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id"),
              sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }

        // Debugging logs
        console.log(`Section ID: ${sectionId}`);
        console.log(`Section Top: ${sectionTop}`);
        console.log(`Section Height: ${sectionHeight}`);
        console.log(`Scroll Position: ${scrollDown}`);
    });
}
window.addEventListener("scroll", scrollActive);
