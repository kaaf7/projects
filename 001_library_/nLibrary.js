const addButton = document.querySelector(".add-btn");
const closeButton = document.querySelector(".close-btn");
const submitButton = document.querySelector(".submit-btn");
const formElements = document.querySelector(".form__input-group");

let board = document.querySelector(".board");

let myLibrary = [
  { bookName: "", AuthorName: "", bookYear: "", bookGenre: "" },
  { bookName: "", AuthorName: "", bookYear: "", bookGenre: "" },
  { bookName: "", AuthorName: "", bookYear: "", bookGenre: "" },
  { bookName: "", AuthorName: "", bookYear: "", bookGenre: "" },
];

board.style.gridTemplateColumns = "repeat(5,1fr)";
board.style.gridTemplateRows = `repeat(${myLibrary.length},1fr)`;

let bookObj = { bookName: "", AuthorName: "", bookYear: "", bookGenre: "" };

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
  }
}

createLibrary(myLibrary);
