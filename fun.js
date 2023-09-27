let css = document.querySelector("strong");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function c() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input" , c);
color2.addEventListener("input" , c);