const screenInput = document.querySelector(".calculator-numbers");
const buttonNumbers = document.querySelectorAll(".btn-");
const addButton = document.getElementById("add");
const operationButton = document.querySelectorAll(".btn-blue-operator");

var input = "0";

const clearButton = document.getElementById("clear-operator");

for (let i = 0; i < buttonNumbers.length; i++) {
  buttonNumbers[i].addEventListener("click", () => {
    var elementValue = buttonNumbers[i].value;

    if (screenInput.value === "0") {
      screenInput.value = elementValue;
    } else {
      screenInput.value += elementValue;
    }
  });
}

for (let j = 0; j <= operationButton.length; j++) {
  if (operationButton[j].id === "add-operator") {
    operationButton[j].addEventListener("click", () => {
      console.log("add is activated");
    });
  }
}

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

// addButton.addEventListener("click", () => {
//   add(screenInput.value, screenInput.value);
// });

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
