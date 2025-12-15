const header = document.getElementById("main-header");
const heroAssemble = document.querySelector(".logo-assemble");
const wDark = document.querySelector(".w-dark");
const wLight = document.querySelector(".w-light");
const heroLogo = document.getElementById("hero-logo");
let wMoved = false;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (window.scrollY > 30) {
        document.body.classList.add("scrolled");
        header.classList.add("active");
        heroAssemble.style.opacity = "0";
        wDark.style.opacity = "0";
        wLight.style.opacity = "1";
    } else {
        document.body.classList.remove("scrolled");
        header.classList.remove("active");
        heroAssemble.style.opacity = "1";
        wDark.style.opacity = "1";
        wLight.style.opacity = "0";

        wMoved = false;
        heroLogo.classList.remove("w-moved");
    }
    if (scrollY > 120 && !wMoved) {
        heroLogo.classList.add("w-moved");
        wMoved = true;
    }
});
