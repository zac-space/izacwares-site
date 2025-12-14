const header = document.getElementById("main-header");
const heroAssemble = document.querySelector(".logo-assemble");
const wDark = document.querySelector(".w-dark");
const wLight = document.querySelector(".w-light");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        // 배경 전환
        document.body.classList.add("scrolled");
        // 헤더 표시
        header.classList.add("active");
        // W 없는 로고 페이드 아웃
        heroAssemble.style.opacity = "0";
        // W 색상 전환
        wDark.style.opacity = "0";
        wLight.style.opacity = "1";
    } else {
        document.body.classList.remove("scrolled");
        header.classList.remove("active");
        heroAssemble.style.opacity = "1";
        wDark.style.opacity = "1";
        wLight.style.opacity = "0";
    }
});
