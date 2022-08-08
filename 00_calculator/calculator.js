const screenInput = document.querySelector(".calculator-numbers");
const buttonNumbers = document.querySelectorAll(".btn-"); // selecting all the number buttons so i can loop through them
const operationButton = document.querySelectorAll(".btn-blue-operator"); // slecting all the math operatio buttons so i can loop through them

// this is an empty variable to save the data inside while doing the math operations
var input = "0";

// this is clear button which will clear the screen from the numbers on it
const clearButton = document.getElementById("clear-operator");

function operation(a, b, operate) {
  parseInt(a) + operate + parseInt(b);
}

// this is a loop to get all the numbers and then add them into the screen as a a string value which will be converted later into int for the math operation
for (let i = 0; i < buttonNumbers.length; i++) {
  buttonNumbers[i]?.addEventListener("click", () => {
    var elementValue = buttonNumbers[i].value;
    if (screenInput.value === "0") {
      screenInput.value = elementValue;
    } else {
      screenInput.value += elementValue;
    }
  });
}

// this is for math operation buttons activation + - x / =

// this is for clear button to clear the screen from the numbers on it
clearButton.addEventListener("click", () => {
  if (screenInput.value !== "0") {
    input = screenInput.value; // storing the data into other variable so we can use later for math operations
    console.log(input);
    screenInput.value = ""; // turning input value into 0
  } else {
    screenInput.value = ""; // turniing screen value into 0
  }
});

for (let j = 0; j <= operationButton.length; j++) {
  operationButton[j]?.addEventListener("click", () => {
    console.log(window[operationButton[j]?.id](screenInput.value,screenInput.value)); // window["string"] this turns string from the id into function so we can save time by executing id which executes the function whith similar name to the iud
  });
}

// the basic math operations

function sum(a, b) {
  
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

/// a trial way to see if i can combine all the operator buttons into one grid and then i found a better way to summerize it in less than 5 lines of code instead of 50
// for (let j = 0; j <= operationButton.length; j++) {
//   if (operationButton[j]?.id === "add-operator") {
//     operationButton[j]?.addEventListener("click", () => {
//       console.log("add is activated");
//       return;
//     });
//   } else if (operationButton[j]?.id === "+") {
//     operationButton[j]?.addEventListener("click", () => {
//       console.log("multiply is activated");
//       return;
//     });
//   } else if (operationButton[j]?.id === "subtract-operator") {
//     operationButton[j]?.addEventListener("click", () => {
//       console.log("subtract is activated");
//       return;
//     });
//   } else if (operationButton[j]?.id === "divide-operator") {
//     operationButton[j]?.addEventListener("click", () => {
//       console.log("divide is activated");
//       return;
//     });
//   } else if (operationButton[j]?.id === "equal-operator") {
//     operationButton[j]?.addEventListener("click", () => {
//       console.log("equal is activated");
//       return;
//     });
//   }
// }
