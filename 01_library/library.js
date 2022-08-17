const addBtn = document.querySelector(".add-btn");

const bookName = document.getElementById("book-name");

const bookAuthor = document.getElementById("book-author");

const bookYear = document.getElementById("book-year");

const bookGenre = document.getElementById("book-genre");

const submitBtn = document.getElementById("submit-btn");

const fillForm = document.querySelector(".fill-form");

const fillFormChildren = document.querySelector(".fill-form").children;
let board = document.querySelector(".board");
size = 5;

board.style.gridTemplateColumns = "repeat(5,1fr)";
board.style.gridTemplateRows = "repeat(20,1fr)";
  for (let i = 0; i < 100; i++) {
    let card = document.createElement("section");
    card.style.backgroundColor = "yellow"
    board.insertAdjacentElement("beforeend", card);}



let myLibrary = [
  {
    Name: "",
    author: "",
    year: "",
    genre: "",
  },
  {
    Name: "",
    author: "",
    year: "",
    genre: "",
  },
  {
    Name: "",
    author: "",
    year: "",
    genre: "",
  },
];

let bookObj = {
  Name: "",
  author: "",
  year: "",
  genre: "",
};

function book(name, author, year, genre) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

function addBookToLibrary() {
  //book(bookName.value, bookAuthor.value, bookYear.value, bookGenre.value);
  book("GOT", "Karim", "1993", "aaa");
}

addBtn.addEventListener("click", () => {
  if (fillForm.style.visibility != "visible") {
    fillForm.style.visibility = "visible";
  } else {
    fillForm.style.visibility = "hidden";
  }
});

submitBtn.addEventListener("click", () => {
  if (
    bookName.value !== "" &&
    bookAuthor.value !== "" &&
    bookYear.value !== "" &&
    bookGenre.value !== ""
  ) {
    getBook.name = bookName.value;
    getBook.author = bookAuthor.value;
    getBook.year = bookYear.value;
    getBook.genre = bookGenre.value;
  } else {
  }
});

myLibrary.push(book("GOT", "Karim", "1993", "aaa"));
