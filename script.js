const header = document.getElementById("main-header");
const heroLogo = document.getElementById("hero-logo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.classList.add("active");
        heroLogo.classList.add("hide");
    } else {
        header.classList.remove("active");
        heroLogo.classList.remove("hide");
    }
});
