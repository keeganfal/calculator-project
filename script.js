const screen = document.querySelector("#screen");
const display = document.querySelector(".main__display");
const buttons = document.querySelectorAll(".main__button")

currentNum = "";

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

Array.from(buttons).forEach((button) =>
  button.addEventListener("click", handleCalculation)
);