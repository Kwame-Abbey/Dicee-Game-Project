// alert("Ablordey Morgan")

// Creating Random Number (1-6)

const randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Random Image Generator

const randomImage1 = "images/dice" + randomNumber1 + ".png";

// Setting Image Attribute

const randomImageSource1 = document
  .querySelector(".img1")
  .setAttribute("src", randomImage1);

// Creating Random Number (1-6)

const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Random Image Generator

const randomImage2 = "images/dice" + randomNumber2 + ".png";

// Setting Image Attribute

const randomImageSource2 = document
  .querySelector(".img2")
  .setAttribute("src", randomImage2);


// Determining Winner

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins"
}else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw"
}else {
    document.querySelector("h1").innerHTML = "Player 2 wins"
}