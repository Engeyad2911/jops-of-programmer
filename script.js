const loginForm = document.getElementById("login-form");
const personalDataForm = document.getElementById("personal-data-form");
const experiencesSkillsForm = document.getElementById("experiences-skills-form");
const loginMessage = document.getElementById("login-message");
const personalDataMessage = document.getElementById("personal-data-message");
const experiencesSkillsMessage = document.getElementById("experiences-skills-message");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Handle login here
    // Redirect to jobs page
    window.location.hash = "#jobs";
});

personalDataForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Validate form
    if (
        !personalDataForm.name.value ||
        !personalDataForm.phone.value ||
        !personalDataForm.email.value ||
        !personalDataForm.password.value
    ) {
        personalDataMessage.innerText = "Please fill inall the data.";
        return;
    }
    // Handle personal data submission here
    // Redirect to experiences and skills page
    window.location.hash = "#experiences-skills";
});

experiencesSkillsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Validate form
    if (
        !experiencesSkillsForm.age.value ||
        !experiencesSkillsForm.experience.value ||
        !experiencesSkillsForm.location.value ||
        !experiencesSkillsForm.education.value ||
        !experiencesSkillsForm.skills.value ||
        !experiencesSkillsForm.currentWork.value ||
        !experiencesSkillsForm.certificates.value ||
        !experiencesSkillsForm.specialty.value
    ) {
        experiencesSkillsMessage.innerText = "Please fill in all the data.";
        return;
    }
    // Handle experiences and skills submission here
    // Redirect to jobs page
    window.location.hash = "#jobs";
});

// Scroll to the correct section when clicking on the navigation bar
const navbarLinks = document.querySelectorAll(".navbar a");
navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});


const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
})

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
}