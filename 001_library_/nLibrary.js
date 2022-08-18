const addButton = document.querySelector(".add-btn");
const closeButton = document.querySelector(".close-btn");
const submitButton = document.querySelector(".sumbit-btn");
const formElements = document.querySelector(".form__input-group");
const bookNameInput = document.getElementById("bookName");
const bookAuthorInput = document.getElementById("bookAuthor");
const bookYearInput = document.getElementById("bookYear");
const bookGenreInput = document.getElementById("bookGenre");

let board = document.querySelector(".board");
var bookObj = { bookName: "", AuthorName: "", bookYear: "", bookGenre: "" };

let myLibrary = [];

board.style.gridTemplateColumns = "repeat(5,1fr)";
board.style.gridTemplateRows = `repeat(${myLibrary.length},1fr)`;

addButton.addEventListener("click", () => {
  const fillForm = document.querySelector(".form");
  if (fillForm.style.visibility === "hidden") {
    fillForm.style.visibility = "visible";
  } else {
    fillForm.style.visibility = "hidden";
    formElements.style.visibility === "hidden";
  }
});

closeButton.addEventListener("click", () => {
  if (fillForm.style.visibility === "visible") {
    fillForm.style.visibility = "hidden";
  }
});

submitButton.addEventListener("click", () => {
  bookObj.bookName = bookNameInput.value;
  bookObj.AuthorName = bookAuthorInput.value;
  bookObj.bookYear = bookYearInput.value;
  bookObj.bookGenre = bookGenreInput.value;
  myLibrary.push(bookObj);

  bookObj.bookGenre = "";
  bookNameInput.value = "";
  bookAuthorInput.value = "";
  bookYearInput.value = "";
  bookGenreInput.value = "";
  console.log(bookObj.bookName);
});

if (
  bookNameInput.value !== "" &&
  bookAuthorInput.value !== "" &&
  bookYearInput.value !== "" &&
  bookGenreInput.value !== ""
) {
}

function createLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    let card = document.createElement("section");
    let bookName = document.createElement("div");
    let bookAuthor = document.createElement("div");
    let bookYear = document.createElement("div");
    let bookGenre = document.createElement("div");
    // <label>did you read?
    // <input type="checkbox" name="peas" />
    // </label>
    // let checkBox = document.createElement("INPUT");
    // let checkBoxLabel = document.createElement("label")
    //checkBox.setAttribute("type", "checkbox");
    bookName.innerHTML = "book Name";
    bookAuthor.innerHTML = "book Author";
    bookYear.innerHTML = "Book Year";
    bookGenre.innerHTML = "Book Genre";
    // checkBoxLabel.innerHTML = "Read?"
    card.appendChild(bookName);
    card.appendChild(bookAuthor);
    card.appendChild(bookYear);
    card.appendChild(bookGenre);
    // card.appendChild(checkBox);
    // card.appendChild(checkBoxLabel);
    board.insertAdjacentElement("beforeend", card);
    return;
  }
}
console.log(bookObj.AuthorName);
