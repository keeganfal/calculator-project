const screen = document.querySelector("#screen");
const display = document.querySelector(".main__display");
const numButtons = document.querySelectorAll(".main__num-button")
const calcButtons = document.querySelectorAll(".main__calc-button")

currentNum = "";


const handleNumbers = (event) =>{
    switch (event.target.id) {
      case "one":
        console.log("one");
        display.innerHTML += "1";
        break;
      case "two":
        console.log("two");
        display.innerHTML += "2";
        break;
      case "three":
        console.log("divide was pressed");
        display.innerHTML += "3";
        break;
      case "four":
        console.log("four");
        display.innerHTML += "4";
        break;
      case "five":
        console.log("five");
        display.innerHTML += "5";
        break;
      case "six":
        console.log("six");
        display.innerHTML += "6";
        break;
      case "seven":
        console.log("seven");
        display.innerHTML += "7";
        break;
      case "eight":
        console.log("eight");
        display.innerHTML += "8";
        break;
      case "nine":
        console.log("nine");
        display.innerHTML += "9";
        break;
      case "zero":
        console.log("zero");
        display.innerHTML += "0";
        break;
    }
}

const handleCalculation = (event) =>{
    switch (event.target.id) {
      case "plus-minus-button":
        console.log("plus minus was pressed");
        display.innerHTML = "+"
        break;
      case "percent-button":
        console.log("percent was pressed");
        display.innerHTML = "%"
        break;
      case "divide-button":
        console.log("divide was pressed");
        display.innerHTML = "÷"
        break;
      case "multiply-button":
        console.log("multiply was pressed");
        display.innerHTML = "x"
        break;
      case "minus-button":
        console.log("minus was pressed");
        display.innerHTML = "-"
        break;
      case "plus-button":
        console.log("plus was pressed");
        display.innerHTML = "+"
        break;
    }
}

Array.from(numButtons).forEach((button) =>
  button.addEventListener("click", handleNumbers)
);

Array.from(calcButtons).forEach((button) =>
  button.addEventListener("click", handleCalculation)
);