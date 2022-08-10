const screenDisplay = document.querySelector(".calculator-numbers");

const buttonNumbers = document.querySelectorAll(".btn-"); // selecting all the number buttons so i can loop through them

const operationButton = document.querySelectorAll(".btn-blue-operator"); // slecting all the math operatio buttons so i can loop through them

const clearButton = document.getElementById("clear-operator");

const equalButtons = document.getElementById("equal");

const zeroButton = document.getElementById("zero-btn");

let bStepButton = document.getElementById("back");

let currentNum = "";
let previousNum = "";
let operator = "";

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

function handleOperator(op) {
  operator = op;
  previousNum = currentNum;
  screenDisplay.textContent = ""; // set the display back to nothing
  currentNum = ""; // set the current number back to nothing
}
function handleNumber(number) {
  if (currentNum.length <= 10) {
    currentNum += number;
    screenDisplay.textContent = currentNum;
  }
}

function handleMath() {
  currentNum = Number(currentNum);
  previousNum = Number(previousNum);
  if (previousNum > "0") {
    if (operator === "+") {
      currentNum += previousNum;
    } else if (operator === "-") {
      currentNum = previousNum - currentNum;
    } else if (operator === "/") {
      currentNum = previousNum / currentNum;
    } else if (operator === "x") {
      currentNum = previousNum * currentNum;
    }
    if (currentNum.length > 10) {
      currentNum = currentNum.slice(0, 10);
    }
    screenDisplay.textContent = currentNum;
    previousNum = ""; // to stop the equal button from repeating the equation everytime we press the equal button
  }
}

equalButtons.addEventListener("click", handleMath);

function clearOperation() {
  if (screenDisplay.textContent.length > "0") {
    screenDisplay.textContent = "";
    previousNum = "";
    currentNum = "";
  }
}

bStepButton.addEventListener("click", () => {
  if (currentNum.length > 0) {
    currentNum = currentNum.substring(0, currentNum.length - 1); // to remove the last number added to the screen
    screenDisplay.textContent = currentNum;
  }
});

// // this is an empty variable to save the data inside while doing the math operations
// var emptyInput = "0";

// function operation(a, b, operate) {
//   parseInt(a) + operate + parseInt(b);
// }

// // this is a loop to get all the numbers and then add them into the screen as a astring value which will be converted later into int for the math operation
// // for (let i = 0; i < buttonNumbers.length; i++) {
// //   buttonNumbers[i]?.addEventListener("click", () => {
// //     var elementValue = buttonNumbers[i].value;
// //     if (screenInput.value === "0") {
// //       screenInput.value = elementValue;
// //     } else {
// //       screenInput.value += elementValue;
// //     }
// //   });
// // }

// //this is a loop to get all the numbers and then add them into the screen as a astring value which will be converted later into int for the math operation

// buttonNumbers.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     handleNumber(e.target.textContent);
//   });
// });

// operationButton.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     handleOperation(e.target.textConten);
//   });
// });

// function handleOperation(op) {
//   if (previousNum === "") {
//     previousNum = currentNum;
//     operatorCheck(op)
//   } else if ( currentNum ===""){
//     operatorCheck(op)
//   }
// }

// function operatorCheck(text) {
//   operator = text;
//   screenDisplay.textContent = previousNum + " " + operator;
//   currentNum = "";
// }

// function handleNumber(number) {
//   if (currentNum.length <= 10) {
//     currentNum += number;
//     screenDisplay.textContent = currentNum;
//   }
// }

// // this is for clear button to clear the screen from the numbers in it
// function clearOperation() {
//   screenInput.value = "0"; // turniing screen value into 0
// }

// clearButton.addEventListener("click", clearOperation);

// // //this is for math operation buttons activation + - x / =
// // for (let j = 0; j <= operationButton.length; j++) {
// //   operationButton[j]?.addEventListener("click", () => {
// //     console.log(operationButton[j]?.id);
// //     //console.log(window[operationButton[j]?.id](input, input)); // window["string"] => window [sum] this turns string from the id into function so we can save time by executing id which executes the function whith similar name to the id
// //   });
// // }

// // for (let j = 0; j <= operationButton.length; j++) {
// //   operationButton[j]?.addEventListener("click", () => {});
// // }

// // the basic math operations
// function sum(a, b) {
//   return parseInt(a) + parseInt(b);
// }

// function subtract(a, b) {
//   return parseInt(a) - parseInt(b);
// }

// function divide(a, b) {
//   return parseInt(a) / parseInt(b);
// }

// function multiply(a, b) {
//   return parseInt(a) * parseInt(b);
// }

// // for (j = 0; j <= operationButton.length; j++) {
// //   operationButton[j]?.addEventListener("click", () => {
// //     emptyInput = screenInput.value;
// //     screenInput.value = "";
// //     equalButtons.addEventListener("click", () => {
// //       screenInput.value = sum(
// //         parseInt((screenInput.value /*+= emptyInput*/)),
// //         parseInt(emptyInput)
// //       );
// //     });
// //   });
// // }

// // for (j = 0; j <= operationButton.length; j++) {
// //   operationButton[j]?.addEventListener("click", () => {
// //     emptyInput = screenInput.value;
// //     screenInput.value = "";

// //     equalButtons.addEventListener("click", () => {
// //       screenInput.value = emptyInput + screenInput.value;
// //     });
// //   });
// // }

// sumBtn.addEventListener("click", () => {
//   emptyInput = screenInput.value;
//   screenInput.value = "";
//   equalButtons.addEventListener("click", () => {
//     screenInput.value += emptyInput;
//   });
// });

// // //a trial way to see if i can combine all the operator buttons into one grid and then i found a better way to summerize it in less than 5 lines of code instead of 50
// // for (let j = 0; j <= operationButton.length; j++) {
// //   if (operationButton[j]?.id === "sum") {
// //     operationButton[j]?.addEventListener("click", () => {
// //       console.log("add is activated");
// //       return;
// //     });
// //   } else if (operationButton[j]?.id === "subtract") {
// //     operationButton[j]?.addEventListener("click", () => {
// //       clearOperation;
// //       return true;
// //     });
// //   } else if (operationButton[j]?.id === "divide") {
// //     operationButton[j]?.addEventListener("click", () => {
// //       console.log("divide is activated");
// //       return;
// //     });
// //   } else if (operationButton[j]?.id === "multiply") {
// //     operationButton[j]?.addEventListener("click", () => {
// //       console.log("multiply is activated");
// //       emptyInput = screenInput.value;
// //       screenInput.value = screenInput.value;
// //       clearOperation();
// //       if (operationButton[j]?.id === "equal") {
// //         operationButton[j]?.addEventListener("click", () => {
// //           clearOperation();
// //           var newValue = toString(multiply("5", "5"));
// //           screenInput.value = newValue;
// //         });
// //       }
// //     });
// //   } else if (operationButton[j]?.id === "equal-operator") {
// //     operationButton[j]?.addEventListener("click", () => {
// //       console.log("equal is activated");
// //       return;
// //     });
// //   }
// // }
