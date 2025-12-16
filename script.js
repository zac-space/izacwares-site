const header = document.getElementById("main-header");
const heroAssemble = document.querySelector(".logo-assemble");
const wDark = document.querySelector(".w-dark");
const wLight = document.querySelector(".w-light");
const heroW = document.getElementById("hero-w");
const heroText = document.getElementById("hero-text");
const about = document.getElementById("about");

let wMoved = false;

const STEP1 = 30;
const STEP2_ON  = 120;
const STEP2_OFF = 80;
const STEP3 = 512;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    /* STEP 1 */
    if (scrollY > STEP1) {
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

    /* STEP 2 : W 이동 + 텍스트 표시 */
    if (!wMoved && scrollY >= STEP2_ON) {
        heroW.classList.add("w-moved");
        heroText.classList.add("show");
        wMoved = true;
    }
    else if (wMoved && scrollY <= STEP2_OFF) {
        heroW.classList.remove("w-moved");
        heroText.classList.remove("show");
        wMoved = false;
    }

    /* STEP 3 */
    if (scrollY > STEP3) {
        about.classList.add("show");
    } 
    else {
        about.classList.remove("show");
    }
    
});
