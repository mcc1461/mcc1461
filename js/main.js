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
/* =============== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true // Animation repeats when scrolling up
});

sr.reveal(`.home__data, .experience, .skills`)
sr.reveal(`.home__img`, { delay: 600 })
sr.reveal(`.home__scroll`, { delay: 900 })

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button"),
      darkTheme = "dark-theme",
      iconTheme = "bx-sun";

const selectedTheme = () => {
    const currentTheme = localStorage.getItem("selected-theme"),
          currentIcon = localStorage.getItem("selected-icon");

    if (currentTheme) {
        document.body.classList[currentTheme === "dark" ? "add" : "remove"](darkTheme);
        themeButton.classList[currentIcon === "bx-moon" ? "add" : "remove"](iconTheme);
    }
}
selectedTheme();

const darkLightTheme = () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", document.body.classList.contains(darkTheme) ? "dark" : "light");
    localStorage.setItem("selected-icon", themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun");
}
themeButton.addEventListener("click", darkLightTheme);

/*=============== REDUCE HEADER SIZE ===============*/
const header = () => {
    const header = document.getElementById("header");
    this.scrollY >= 200 ? header.classList.add("scroll-header")
                        : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", header);

