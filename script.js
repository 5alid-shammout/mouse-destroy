let btn = document.querySelector("button");
let nts = document.querySelector(".notes");


// display notes when hovering the button
btn.addEventListener("mouseover", () => {
    nts.style.transform = "translateY(0)";
});