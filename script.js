let btn = document.querySelector("button");
let nts = document.querySelector(".notes");
let boomimg = document.querySelector("img");

// display notes when hovering the button
btn.addEventListener("mouseover", () => {
  nts.style.transform = "translateY(0)";
});

const body = document.body;
const el = document.querySelector("#img");

body.addEventListener("mousemove", (e) => {
  el.style.left = e.pageX - 100 + "px";
  el.style.top = e.pageY - 205 + "px";
});

// mouse destroying [evil laugh hahahahaha]
btn.addEventListener("click", (e) => {
  document.documentElement.requestFullscreen();
  btn.innerText = "wait 3s";

  setTimeout(() => {
    btn.innerText = "wait 2s";

    setTimeout(() => {
      btn.innerText = "wait 1s";

      setTimeout(() => {
        btn.innerText = "boooooooooom!";
        el.style.opacity = 1;

        document.querySelector("body").style.cursor = "none";
        btn.style.cursor = "none";
        nts.style.transform = "translateY(2.5vh)";

        setTimeout(() => {
          el.style.opacity = 0;
        }, 1200);
      }, 1000);
    }, 1000);
  }, 1000);
});
