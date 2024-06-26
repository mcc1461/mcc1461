/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");

const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

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
const contactForm = document.getElementById("contact-form");

const contactMessage = document.getElementById("contact-message");

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
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 358;
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

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

sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`, { delay: 600 })
sr.reveal(`.home__scroll`, { delay: 900 })
sr.reveal(`.skills__content`, { interval: 100 })
sr.reveal(`.work__card`, { interval: 100 , origin: "left", delay:200})
sr.reveal(`.services__card`, {interval:100})
sr.reveal(`.about__data`, { origin: "right", delay: 300, interval: 100})
sr.reveal(`.about__img`, {origin: "left", delay: 400, interval: 100})


/* =============== AUTO FOCUS =============== */
// Select all contact input and textarea elements
const contactInputs = document.querySelectorAll('.contact__input, .contact__area');

// Add event listeners to these elements
contactInputs.forEach(input => {
    input.addEventListener('mouseover', () => input.focus());
    input.addEventListener('mouseout', () => input.blur());
});

/* =============== DARK LIGHT THEME =============== */
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "bx-sun"; // Adjust according to actual icon class names if different

    // Function to load the selected theme from localStorage
    const selectedTheme = () => {
        const currentTheme = localStorage.getItem("selected-theme");
        const currentIcon = localStorage.getItem("selected-icon");

        document.body.classList.toggle(darkTheme, currentTheme === "dark");
        themeButton.querySelector('.ri-sun-line').style.display = currentTheme === "dark" ? "none" : "block";
        themeButton.querySelector('.ri-moon-line').style.display = currentTheme === "dark" ? "block" : "none";
    }

    selectedTheme();

    const darkLightTheme = () => {
        document.body.classList.toggle(darkTheme);
        const isDark = document.body.classList.contains(darkTheme);
        themeButton.querySelector('.ri-sun-line').style.display = isDark ? "none" : "block";
        themeButton.querySelector('.ri-moon-line').style.display = isDark ? "block" : "none";

        localStorage.setItem("selected-theme", isDark ? "dark" : "light");
    }

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme"); // Toggles the dark-theme class on the body
});

// /*=============== DARK LIGHT THEME ===============*/
// const themeButton = document.getElementById("theme-button");

// const darkTheme = "dark-theme";
// const iconTheme = "bx-sun";

// const selectedTheme = () => {
//     const currentTheme = localStorage.getItem("selected-theme");
//     const currentIcon = localStorage.getItem("selected-icon");

//     if (currentTheme) {
//         document.body.classList[currentTheme === "dark" ? "add" : "remove"](darkTheme);
//         themeButton.classList[currentIcon === "bx-moon" ? "add" : "remove"](iconTheme);
//     }
// }
// selectedTheme();

// const darkLightTheme = () => {
//     document.body.classList.toggle(darkTheme);
//     themeButton.classList.toggle(iconTheme);

//     localStorage.setItem("selected-theme", document.body.classList.contains(darkTheme) ? "dark" : "light");
//     localStorage.setItem("selected-icon", themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun");
// }
// themeButton.addEventListener("click", darkLightTheme);

// /*=============== REDUCE HEADER SIZE ===============*/
// const header = () => {
//     const header = document.getElementById("header");
//     this.scrollY >= 200 ? header.classList.add("scroll-header")
//                         : header.classList.remove("scroll-header");
// }
// window.addEventListener("scroll", header);


