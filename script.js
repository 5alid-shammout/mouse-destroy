let btn = document.querySelector("button");
let nts = document.querySelector(".notes");
let boomimg = document.querySelector("img");
const body = document.body;
const el = document.querySelector("#img");


// mouse destroying [evil laugh hahahahaha]
const onbtnclck = () => {
  document.documentElement.requestFullscreen();
  btn.innerText = "wait 3s";
  btn.removeEventListener("click", onbtnclck);

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
        body.removeEventListener("mousemove", (e) => {
          el.style.left = e.pageX - 100 + "px";
          el.style.top = e.pageY - 205 + "px";
        });

        setTimeout(() => {
          el.style.opacity = 0;
        }, 1200);
      }, 1000);
    }, 1000);
  }, 1000);
};

// event listeners

btn.addEventListener("click", onbtnclck);

body.addEventListener("mousemove", (e) => {
  el.style.left = e.pageX - 100 + "px";
  el.style.top = e.pageY - 205 + "px";
});

// display notes when hovering the button

btn.addEventListener("mouseover", () => {
  nts.style.transform = "translateY(0)";
});
