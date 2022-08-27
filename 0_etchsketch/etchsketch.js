const container = document.getElementById("container");
const restartBtn = document.getElementById("restart-btn");
const changeColorBtn = document.getElementById("change-btn");
var color = "black";

/* 
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
}



makeRows(10, 10); */

var randomColorPicker = Math.floor(Math.random() * 12422313).toString(16);

var randomColor = "#" + randomColorPicker;

function populateBoard(size) {
  const container = document.getElementById("container");
  var square = container.querySelectorAll("div"); // to remove any existing square/ clearing all square before picking numbers
  square.forEach((div) => div.remove()); // to remove any existing square/ clearing all square before picking numbers

  container.style.gridTemplateColumns = `repeat(${size} , 1fr)`; // here we will add the grid size which is the size in function populateBoard(size)
  container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  var changeAmount = size * size;
  for (i = 0; i < changeAmount; i++) {
    let square = document.createElement("div");
    /*  square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#" + randomColorPicker;
    }); // to change the square color to another color when hovering over*/
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white ";
    container.insertAdjacentElement("beforeend", square);
  }
}
populateBoard(16);

function changeSize(input) {
  if (input >= 2 || input <= 100) {
    populateBoard(input);
  } else {
    console.log("too many");
  }
}

// function made to change the square color
function colorSquare() {
    if (color === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // for the random color

    }
  this.style.backgroundColor = color;
}

function changeColor(choice) {
  color = choice;
  
} 
function generateRandomColor() {
  //const gridItem = document.querySelector("grid-item");
  //const randomColornumber = Math.floor(Math.random() * 16777215).toString(16);
  //gridItem.style.backgroundColor = "#" + randomColornumber;
  //restartBtn.style.backgroundColor = "#" + randomColornumber;
}

function resetBoard(){

    const container = document.getElementById("container");
    var square = container.querySelectorAll("div"); // to remove any existing square/ clearing all square before picking numbers
    square.forEach((div) => div.style.backgroundColor = 'white');
}

/* function submitEvent() {
  const input = document.getElementById("gridsnum").value;
  makeRows(input, input);
}
 */
//const getForm = document.getElementById('form');

// getForm.addEventListener('submit', (e) =>{
//     e.preventDefault();

// } );
//changeColorBtn.addEventListener("click", generateRandomColor());
