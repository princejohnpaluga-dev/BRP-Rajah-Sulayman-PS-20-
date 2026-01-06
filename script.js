const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

function toggleDark(){
    document.body.classList.toggle("dark-mode");
}

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Section Highlight on Scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .nav-links li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href").substring(1) === current) {
            a.classList.add("active");
        }
    });
});

// Scroll Down Indicator
const scrollDown = document.querySelector(".scroll-down");

scrollDown.addEventListener("click", () => {
    const overviewSection = document.getElementById("overview");
    overviewSection.scrollIntoView({
        behavior: "smooth"
    });
});
