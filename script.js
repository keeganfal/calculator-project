const displayHistory = document.querySelector(".main__display-history");
const displayOutput = document.querySelector(".main__display-output");
const numButtons = document.querySelectorAll(".main__num-button")
const calcButtons = document.querySelectorAll(".main__operator-button")

currentNum = "";

const getOutput = () => { 
    return displayOutput.innerHTML;
};

const printOutput = (num) => { 
    return displayOutput.innerHTML = num;
};


const handleNumbersClick = (event) =>{
    switch (event.target.id) {
      case "one":
        console.log("one");
        displayOutput.innerHTML += "1";
        break;
      case "two":
        console.log("two");
        displayOutput.innerHTML += "2";
        break;
      case "three":
        console.log("3");
        displayOutput.innerHTML += "3";
        break;
      case "four":
        console.log("four");
        display.innerHTML += "4";
        break;
      case "five":
        console.log("five");
        displayOutput.innerHTML += "5";
        break;
      case "six":
        console.log("six");
        displayOutput.innerHTML += "6";
        break;
      case "seven":
        console.log("seven");
        displayOutput.innerHTML += "7";
        break;
      case "eight":
        console.log("eight");
        displayOutput.innerHTML += "8";
        break;
      case "nine":
        console.log("nine");
        displayOutput.innerHTML += "9";
        break;
      case "zero":
        console.log("zero");
        displayOutput.innerHTML += "0";
        break;
    }
}

const handleOperatorClick = (event) =>{
    switch (event.target.id) {
        case "ac-button":
            console.log("ac was pressed");
            displayOutput.innerHTML = ""
            displayHistory.innerHTML = ""
            break;
        case "divide-button":
            console.log("divide was pressed");
            displayOutput.innerHTML = "÷"
            break;
        case "multiply-button":
            console.log("multiply was pressed");
            displayOutput.innerHTML = "x"
            break;
        case "minus-button":
            console.log("minus was pressed");
            displayOutput.innerHTML = "-"
            break;
        case "plus-button":
            console.log("plus was pressed");
            displayOutput.innerHTML = "+"
            break;
    }
}

Array.from(numButtons).forEach((button) =>
  button.addEventListener("click", handleNumbersClick)
);

Array.from(calcButtons).forEach((button) =>
  button.addEventListener("click", handleOperatorClick)
);