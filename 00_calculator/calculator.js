const screenInput = document.querySelector(".calculator-numbers");
const buttonNumbers = document.querySelectorAll(".btn-");
const addButton = document.getElementById("add");
const operationButton = document.querySelectorAll(".btn-blue-operator");

// this is an empty variable to save the data inside while doing the math operations
var input = "0";
// this is clear button which will clear the screen from the numbers on it
const clearButton = document.getElementById("clear-operator");
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

// this is for operation buttons activation + - x / =
for (let j = 0; j <= operationButton.length; j++) {
  operationButton[j]?.addEventListener("click", () => {
    console.log(operationButton[j]?.id + " is executed ");
  });
}

// this is for clear button to clear the screen from the numbers on it
clearButton.addEventListener("click", () => {
  if (screenInput.value !== "0") {
    input = screenInput.value; // storing the data into other variable so we can use later for math operations
    console.log(input);
    screenInput.value = ""; // turning input value into 0
    console.log(add(parseInt(input), parseInt(input))); // for parsing values from string into integer for mathematical operations
  } else {
    screenInput.value = ""; // turniing screen value into 0
  }
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
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
