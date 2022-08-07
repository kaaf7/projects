let screenInput = document.querySelector(".calculator-numbers");
const buttonNumbers = document.querySelectorAll(".btn-");

let stepA;
let stepB;
let stepC;

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

function Operate(a, b, operation) {}
