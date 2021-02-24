let btn = document.querySelector("button");
let nts = document.querySelector(".notes");
let imgdiv = document.querySelector(".imgdiv");
let boomimg = document.querySelector("img");

// display notes when hovering the button
btn.addEventListener("mouseover", () => {
    nts.style.transform = "translateY(0)";
});

// mouse destroying [evil laugh hahahahaha]
btn.addEventListener("click", () => {

    document.documentElement.requestFullscreen();
    btn.innerText = "You are clever wait 3s";

    setTimeout( () => {

        btn.innerText = "You are clever wait 2s";

        setTimeout( () => {

            btn.innerText = "You are clever wait 1s";

            setTimeout( () => {

                btn.innerText = "boooooooooom!";
                imgdiv.innerHTML = '<img id="img" src="https://i.gifer.com/3IsK.gif"></img>';
                
                document.querySelector("body").style.cursor = "none";
                btn.style.cursor = "none";
                nts.style.transform = "translateY(2.5vh)"
                

                setTimeout( () => {

                    imgdiv.innerHTML = ""

                }, 1200);

            }, 1000)

        }, 1000);

    }, 1000);

});