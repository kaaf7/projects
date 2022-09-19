const addButton = document.querySelector(".add-btn");

const closeButton = document.querySelector(".close-btn");

const submitButton = document.querySelector(".sumbit-btn");

const formElements = document.querySelector(".form__input-group");

const formLabel = document.querySelector(".form__input-label");

const bookNameInput = document.getElementById("bookName");

const bookAuthorInput = document.getElementById("bookAuthor");

const bookYearInput = document.getElementById("bookYear");

const bookGenreInput = document.getElementById("bookGenre");

const fillForm = document.querySelector(".form");

let board = document.querySelector(".board");


const nboard ="2"

const bookObj = { bookName: "", AuthorName: "", bookYear: "", bookGenre: "" };

const myLibrary = JSON.parse(localStorage.getItem("books")) || []; // parse file from localhost

board.style.gridTemplateColumns = "repeat(5,1fr)";
board.style.gridTemplateRows = `repeat(${myLibrary.length},1fr)`;

addButton.addEventListener("click", () => {
  fillForm.style.visibility = "visible";
});

function closeForm(form) {
  form.style.visibility = "hidden";
}

closeButton.addEventListener("click", () => {
  fillForm.style.visibility = "hidden";
});

submitButton.addEventListener("click", CreateBook);

function CreateBook() {
  if (
    bookNameInput.value !== "" &&
    bookAuthorInput.value !== "" &&
    bookYearInput.value !== "" &&
    bookGenreInput.value !== ""
  ) {
    bookObj.bookName = bookNameInput.value;
    bookObj.AuthorName = bookAuthorInput.value;
    bookObj.bookYear = bookYearInput.value;
    bookObj.bookGenre = bookGenreInput.value;
    myLibrary.push(bookObj);
    localStorage.setItem("books", JSON.stringify(myLibrary)); // store file in localhost
    createLibraryCard(myLibrary);
    closeForm(fillForm);
  } else {
    alert("please insert  info");
  }
  return;
}

function createLibraryCard(library) {
  for (let i = 0; i < library.length; i++) {
    library = library[i];
    // to add one book at a time
    let card = document.createElement("section");
    let btn = document.createElement("button");
    let bookName = document.createElement("div");
    let bookAuthor = document.createElement("div");
    let bookYear = document.createElement("div");
    let bookGenre = document.createElement("div");
    bookName.innerHTML = "Book: " + bookObj.bookName;
    bookAuthor.innerHTML = "Author:" + bookObj.AuthorName;
    bookYear.innerHTML = "Year: " + bookObj.bookYear;
    bookGenre.innerHTML = "Genre: " + bookObj.bookGenre;
    btn.style.width = "200px";
    btn.style.height = "30px";
    btn.innerHTML = "X";
    btn.style.border = "none";
    btn.style.background = "#F4D19B";
    btn.style.fontFamily = "Bebas Neue";
    btn.style.borderRadius = "5px";
    card.appendChild(bookName);
    card.appendChild(bookAuthor);
    card.appendChild(bookYear);
    card.appendChild(bookGenre);
    card.appendChild(btn);
    board.insertAdjacentElement("beforeend", card);

    btn.addEventListener("click", () => {});
  }
}
function removeBook(lib) {
  //lib.splice(2, 1);
  lib.clear();
  console.table(lib[1]);
}

removeBook(myLibrary);

// const booksdiv = document.querySelector(".books");

// let myLibrary = [];

// let newBookObj = { name: "", author: "", year: "", genre: "", bookId: "" };

// function createCardItems(el, content, elementClass) {
//   const element = document.createElement(el);
//   element.textContent = content;
//   element.setAttribute(elementClass);
//   return element;
// }

// function createIcon(iconClass, icon) {
//   const iconType = document.createElement(icon);
//   iconType.setAttribute("class", iconClass);
//   return iconType;
// }

// function openEditingWidow() {}

// function editItem(bookItem) {
//   for (let i = 0; i <= myLibrary.length; i++) {
//     if (bookItem.id == myLibrary[i].id) {

//     }
//   }
// }

// function addNewBook(book) {
//   if (bookInput.value !== "" && authorInput.value !== "" && genreInput.value) {
//     book.name = bookInput.value;
//     book.autho = authorInput.value;
//     book.genre = genreInput.value;
//     myLibrary.push(book);
//   }
// }

// function createBookCard(book, index) {
//   const bookItem = document.createElement("div");
//   bookItem.setAttribute("id", index);
//   bookItem.setAttribute("key", index);
//   bookItem.setAttribute("class", "book-card");
//   bookItem.appendChild(createCardItems("h1", book.name, "book-name"));
//   bookItem.appendChild(createCardItems("h1", book.author, "book-author"));
//   bookItem.appendChild(createCardItems("h1", book.genre, "book-genre"));
//   bookItem.appendChild(createIcon("button", "delete-button"));
//   bookItem.appendchold(createIcon("button", "EditButton"));
//   return bookItem.id;
// }

// function renderBookLib() {
//   myLibrary.map((book, index) => {
//     createBookCard(book, index);
//   });
// }
// renderBookLib();
