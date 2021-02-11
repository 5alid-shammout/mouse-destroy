let btn = document.querySelector("button");
let nts = document.querySelector(".notes");

// display notes when hovering the button
btn.addEventListener("mouseover", () => {
    nts.style.transform = "translateY(0)";
});

// mouse destroying [evil laugh hahahahaha]
btn.addEventListener("click", () => {
    document.documentElement.requestFullscreen();
    btn.innerText = "You are clever wait 3s";

    setTimeout(function () {
        btn.innerText = "You are clever wait 2s";

        setTimeout(function () {

            btn.innerText = "You are clever wait 1s";

        }, 1000);

    }, 1000);

})