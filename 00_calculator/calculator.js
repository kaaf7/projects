const screenInput = document.querySelector(".calculator-numbers");
const buttonNumbers = document.querySelectorAll(".btn-");
const addButton = document.getElementById("add");
var input = "0";

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
    input = screenInput.value; // storing the data into other variable so we can use later for math operations
    console.log(input);
    screenInput.value = ""; // turning input value into 0 
    console.log( add(parseInt(input),parseInt(input))); // for parsing values from string into integer for mathematical operations

  } else {
    screenInput.value = "";
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
  return a/ b;
}

function multiply(a, b) {
  return a * b;
}



