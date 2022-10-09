const bStepButton = document.getElementById("back-btn");

const screenDisplay = document.querySelector(".calculator-numbers");

const buttonNumbers = document.querySelectorAll(".btn-"); // selecting all the number buttons so i can loop through them

const operationButton = document.querySelectorAll(".btn-blue-operator"); // slecting all the math operatio buttons so i can loop through them

const clearButton = document.getElementById("clear-operator");

const equalButtons = document.getElementById("equal");

const zeroButton = document.getElementById("zero-btn");
const newApp = 1;

const object = { newname,age };
const karim = object;
karim.newName= "karim";
karim.age = 32;
const x = 1

let currentNum = "";
let previousNum = "";
let operator = ""

bStepButton.addEventListener("click", () => {
  if (currentNum.length > 0) {
    currentNum = currentNum.substring(0, currentNum.length - 1); // to remove the last number added to the screen
    screenDisplay.textContent = currentNum;
  }
});

clearButton.addEventListener("click", clearOperation);

buttonNumbers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleNumber(e.target.textContent);
  });
});

operationButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
  });
});

zeroButton.addEventListener("click", (e) => {
  handleNumber(e.target.textContent);
});

equalButtons.addEventListener("click", handleMath);

function handleNumber(number) {
  if (currentNum.length <= 10) {
    currentNum += number;
    screenDisplay.textContent = currentNum;
  }
}

function handleOperator(op) {
  operator = op;
  previousNum = currentNum;
  screenDisplay.textContent = ""; // set the display back to nothing
  currentNum = ""; // set the current number back to nothing
}

function handleMath() {
  currentNum = Number(currentNum);
  previousNum = Number(previousNum);
  if (previousNum > "0") {
    if (operator === "+") {
      currentNum += previousNum;
    } else if (operator === "-") {
      currentNum = previousNum - currentNum;
    } else if (operator === "x") {
      currentNum = previousNum * currentNum;
    } else if (operator === "/") {
      if (currentNum <= 0) {
        screenDisplay.textContent = "Error";
        return;
      }
      currentNum = previousNum / currentNum;
    }

    screenDisplay.textContent = currentNum;
    previousNum = ""; // to stop the equal button from repeating the equation everytime we press the equal button
  }
}

function clearOperation() {
  if (screenDisplay.textContent.length > "0") {
    screenDisplay.textContent = "";
    previousNum = "";
    currentNum = "";
  }
}
