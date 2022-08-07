const screenInput = document.querySelector(".calculator-numbers");
const buttonNumbers = document.querySelectorAll(".btn-");
const addButton = document.getElementById("add");
var stepA;
var StepB;
const clearButton = document.getElementById("clear");

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

clearButton.addEventListener("click", () => {
  if (screenInput.value !== "0") {
    screenInput.value = "";
  } else {
    screenInput.value = "";
  }
});

addButton.addEventListener("click", () => {
  add(screenInput.value, screenInput.value);
});

function add(a, b) {
  a + b;
  return add;
}

function subtract(a, b) {
  a - b;
  return subtract;
}

function divide(a, b) {
  a / b;
  return divide;
}

function multiply(a, b) {
  a / b;
  return multiply;
}
