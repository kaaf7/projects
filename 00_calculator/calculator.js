const screenInput = document.querySelector(".calculator-numbers");

const buttonNumbers = document.querySelectorAll(".btn-"); // selecting all the number buttons so i can loop through them

const operationButton = document.querySelectorAll(".btn-blue-operator"); // slecting all the math operatio buttons so i can loop through them

const clearButton = document.getElementById("clear-operator");

const equalButtons = doqumen.getElementById("equal");

// this is an empty variable to save the data inside while doing the math operations
var emptyInput = "0";

function operation(a, b, operate) {
  parseInt(a) + operate + parseInt(b);
}

// this is a loop to get all the numbers and then add them into the screen as a astring value which will be converted later into int for the math operation
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

// this is for clear button to clear the screen from the numbers in it
function clearOperation() {
  if (screenInput.value !== "0") {
    //input = screenInput.value; // storing the data into other variable so we can use later for math operations
    console.log("clear");
    screenInput.value = ""; // turning input value into 0
  } else {
    screenInput.value = ""; // turniing screen value into 0
  }
}

clearButton.addEventListener("click", clearOperation);

// //this is for math operation buttons activation + - x / =
// for (let j = 0; j <= operationButton.length; j++) {
//   operationButton[j]?.addEventListener("click", () => {
//     console.log(operationButton[j]?.id);
//     //console.log(window[operationButton[j]?.id](input, input)); // window["string"] => window [sum] this turns string from the id into function so we can save time by executing id which executes the function whith similar name to the id
//   });
// }

// for (let j = 0; j <= operationButton.length; j++) {
//   operationButton[j]?.addEventListener("click", () => {});
// }

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

for (j = 0; j <= operationButton.length; j++) {

  operationButton[j]?.addEventListener("click", () => {
    emptyInput = screenInput.value;
    clearOperation();
  });
}

// //a trial way to see if i can combine all the operator buttons into one grid and then i found a better way to summerize it in less than 5 lines of code instead of 50
// for (let j = 0; j <= operationButton.length; j++) {
//   if (operationButton[j]?.id === "sum") {
//     operationButton[j]?.addEventListener("click", () => {
//       console.log("add is activated");
//       return;
//     });
//   } else if (operationButton[j]?.id === "subtract") {
//     operationButton[j]?.addEventListener("click", () => {
//       clearOperation;
//       return true;
//     });
//   } else if (operationButton[j]?.id === "divide") {
//     operationButton[j]?.addEventListener("click", () => {
//       console.log("divide is activated");
//       return;
//     });
//   } else if (operationButton[j]?.id === "multiply") {
//     operationButton[j]?.addEventListener("click", () => {
//       console.log("multiply is activated");
//       emptyInput = screenInput.value;
//       screenInput.value = screenInput.value;
//       clearOperation();
//       if (operationButton[j]?.id === "equal") {
//         operationButton[j]?.addEventListener("click", () => {
//           clearOperation();
//           var newValue = toString(multiply("5", "5"));
//           screenInput.value = newValue;
//         });
//       }
//     });
//   } else if (operationButton[j]?.id === "equal-operator") {
//     operationButton[j]?.addEventListener("click", () => {
//       console.log("equal is activated");
//       return;
//     });
//   }
// }
