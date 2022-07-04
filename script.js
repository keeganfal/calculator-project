const screen = document.querySelector("#screen");
const display = document.querySelector(".main__display");
const acBtn = document.querySelector("#ac-button");
const plusMinusBtn = document.querySelector("#plus-minus-button");
const percentBtn = document.querySelector("#percent-button");
const divideBtn = document.querySelector("#divide-button");


const handleAcClick = (event) =>{
    console.log("AC button was clicked");
}

const handlePlusMinusClick = (event) =>{
    console.log("Plus Minus button was clicked");
}

const handlePercentClick = (event) =>{
    console.log("Percent button was clicked");
}

const handleDivideClick = (event) =>{
    console.log("Divide button was clicked");
    display.innerHTML = "/"
}

acBtn.addEventListener("click", handleAcClick)
plusMinusBtn.addEventListener("click", handlePlusMinusClick)
percentBtn.addEventListener("click", handlePercentClick)
divideBtn.addEventListener("click", handleDivideClick)