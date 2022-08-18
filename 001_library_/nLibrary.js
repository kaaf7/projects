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

let myLibrary = JSON.parse(localStorage.getItem("books")) || [];

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
  localStorage.setItem("books", JSON.stringify(myLibrary));
  createLibrary(myLibrary);
  bookObj.bookName = "";
  bookObj.AuthorName = "";
  bookObj.bookYear = "";
  bookObj.bookGenre = "";
  return;
});

function CreateBook() {}

function createLibrary(library) {
  for (let i = 0; i < library.length; i++) {
    library = library[i]; // to add one extra book at a time
    let card = document.createElement("section");
    let bookName = document.createElement("div");
    let bookAuthor = document.createElement("div");
    let bookYear = document.createElement("div");
    let bookGenre = document.createElement("div");
    bookName.innerHTML = "book Name";
    bookAuthor.innerHTML = "book Author";
    bookYear.innerHTML = "Book Year";
    bookGenre.innerHTML = "Book Genre";
    card.appendChild(bookName);
    card.appendChild(bookAuthor);
    card.appendChild(bookYear);
    card.appendChild(bookGenre);
    board.insertAdjacentElement("beforeend", card);
  }
}
