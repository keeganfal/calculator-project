const displayHistory = document.querySelector(".main__display-history");
const displayOutput = document.querySelector(".main__display-output");
const numButtons = document.querySelectorAll(".main__num-button")
const calcButtons = document.querySelectorAll(".main__operator-button")

const getOutput = () => { 
    return displayOutput.innerHTML;
};

const printOutput = (num) => { 
    return displayOutput.innerHTML = num;
};

const getHistory = () => { 
    return displayHistory.innerHTML;
};

const printHistory = (num) => { 
    return displayHistory.innerHTML = num;
};

const evaluate = (history) => { 
    console.log(history);
    if (history.includes("÷")) {
        console.log("divide was sorted")
        const myArray = history.split("÷");
        return displayOutput.innerHTML = myArray[0]/myArray[1];
    }
    else if (history.includes("x")) {
        console.log("divide was sorted")
        const myArray = history.split("x");
        return displayOutput.innerHTML = myArray[0]*myArray[1];
    }
    else if (history.includes("+")) {
        console.log("divide was sorted")
        const myArray = history.split("+");
        return displayOutput.innerHTML = myArray[0]+myArray[1];
    }
    else if (history.includes("-")) {
        console.log("divide was sorted")
        const myArray = history.split("-");
        return displayOutput.innerHTML = myArray[0]-myArray[1];
    }
};

const handleNumbersClick = (event) =>{
    let output = getOutput();
    switch (event.target.id) {
        case "one":
            console.log("one");
            printOutput(output+"1");
            break;
        case "two":
            console.log("two");
            printOutput(output+"2");
            break;
        case "three":
            console.log("3");
            printOutput(output+"3");
            break;
        case "four":
            console.log("four");
            printOutput(output+"4");
            break;
        case "five":
            console.log("five");
            printOutput(output+"5");
            break;
        case "six":
            console.log("six");
            printOutput(output+"6");
            break;
        case "seven":
            console.log("seven");
            printOutput(output+"7");
            break;
        case "eight":
            console.log("eight");
            printOutput(output+"8");
            break;
        case "nine":
            console.log("nine");
            printOutput(output+"9");
            break;
        case "zero":
            console.log("zero");
            printOutput(output+"0");
            break;
        case "dot":
            console.log("dot");
            printOutput(output+".");
            break;
    }
}

const handleOperatorClick = (event) =>{

    if (event.target.id == "ac-button") {
        console.log("ac was pressed");
        printHistory("");
        printOutput("");
    }

    let output = getOutput();
    let history = getHistory();

    if (output != "") {
        
        if (event.target.id == "equal-button") {
            console.log("equal was pressed");
            printHistory(history + output);
            evaluate(history + output)
        }

        if (event.target.id == "divide-button") {
            console.log("divide was pressed");
            printHistory(output+"÷");
            printOutput("")
        }
    
        else if (event.target.id == "multiply-button") {
            console.log("multiply was pressed");
            printHistory(output+"x");
            printOutput("")
        }
    
        else if (event.target.id == "minus-button") {
            console.log("minus was pressed");
            printHistory(output+"-");
            printOutput("")
        }
    
        else if (event.target.id == "plus-button") {
            console.log("plus was pressed");
            printHistory(output+"+");
            printOutput("")
        }
    
        else {
            console.log("Error")
        }
    }
}

Array.from(numButtons).forEach((button) =>
  button.addEventListener("click", handleNumbersClick)
);

Array.from(calcButtons).forEach((button) =>
  button.addEventListener("click", handleOperatorClick)
);