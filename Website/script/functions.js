const containers = document.querySelectorAll(".card-container");
const cards = document.querySelectorAll(".card");

let scrollY = 0;

window.addEventListener("scroll", () => {
    scrollY = document.documentElement.scrollTop;
});

for(let i = 0; i < cards.length; i++){
    const light = document.createElement("span");

    light.setAttribute("class", "light");

    cards[i].appendChild(light);

    containers[i].addEventListener("mousemove", e =>{

        const innerX = e.clientX - containers[i].offsetLeft;
        const innerY = (e.clientY - containers[i].offsetTop) + scrollY;

        light.style.left = innerX + "px";
        light.style.top = innerY + "px";

        light.classList.add("light-active");

        const x = cards[i].offsetWidth / 2;
        const y = cards[i].offsetHeight / 2;

        const intensityX = 40;
        const intensityY = 20;

        let convertX = ((innerX - x)) * intensityX /x;
        let convertY = ((innerY - y)) * intensityY /y;

        cards[i].style.transform = `rotateY(${convertX}deg) rotateX(${convertY * -1}deg)`
    });

    containers[i].addEventListener("mouseout", () => {
        light.classList.remove("light-active");

        cards[i].style.transform = `rotateY(0deg)`;
    });
}