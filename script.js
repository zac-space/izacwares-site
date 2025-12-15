const header = document.getElementById("main-header");
const heroAssemble = document.querySelector(".logo-assemble");
const wDark = document.querySelector(".w-dark");
const wLight = document.querySelector(".w-light");
const heroLogo = document.getElementById("hero-logo");
const heroW = document.getElementById("hero-w");
const heroText = document.getElementById("hero-text");

let wMoved = false;
const MOVE_ON  = 140; // 내려갈 때 이 이상이면 이동 ON
const MOVE_OFF = 100; // 올라갈 때 이 이하이면 이동 OFF

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    // Step-1
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
    }
    // Step-2
    if (!wMoved && scrollY >= MOVE_ON) {
        heroW.classList.add("w-moved");
        wMoved = true;
    }
    else if (wMoved && scrollY <= MOVE_OFF) {
        heroW.classList.remove("w-moved");
        wMoved = false;
    }        
    // STEP 3
    if (scrollY > 200) {
        heroText.classList.add("show");
    }
    else {
        heroText.classList.remove("show");
    }
});
