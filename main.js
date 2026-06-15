const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav_link");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");

    const isOpen = nav.classList.contains("active");
    burger.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        burger.setAttribute("aria-expanded", false);
    });
});

document.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove("active");
        burger.setAttribute("aria-expanded", false);
    }
});