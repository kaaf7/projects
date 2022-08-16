const addBtn = document.querySelector(".add-btn");

const bookName = document.getElementById("book-name");

const bookAuthor = document.getElementById("book-author");

const bookYear = document.getElementById("book-year");

const bookGenre = document.getElementById("book-genre");

const submitBtn = document.getElementById("submit-btn");

const fillForm = document.querySelector(".fill-form");

const fillFormChildren = document.querySelector(".fill-form").children;

// const cardBookName = document.getElementById("cardBookName");

// const cardAuthorName = document.getElementbyId("cardAuthorName");

// const cardBookYear = document.getElementbyId("cardBookYear");

// const cardBookGenre = document.getElementbyId("cardBookGenra");
// const readOrNot;

let library = [];
let book = { Name: "", Author: "", Year: "", Genre: "" };
function insertBook(name, author, year, genre) {

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
  } else {
    alert("please insert text");
  }
});

// submitBtn.addEventListener("click", () => {
//   for (let i = 0; i < 10; i++) {
//     library[i];
//     alert(library[0].bName);
//     return;
//   }
// });

// function submitBook() {}

// submitBtn.addEventListener("click", () => {
//   library.forEach((book) => {
//     alert(book.bName);
//     return;
//   });
// });
