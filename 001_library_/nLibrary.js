let myLibrary = [
  {
    name: "",
    author: "",
    year: "",
    genre: "",
  },
  {
    name: "",
    author: "",
    year: "",
    genre: "",
  },
  {
    name: "",
    author: "",
    year: "",
    genre: "",
  },
  {
    name: "",
    author: "",
    year: "",
    genre: "",
  },
];
let bookObj = { bookName: "", AuthorName: "", bookYear: "", bookGenre: "" };

let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(5,1fr)";
board.style.gridTemplateRows = `repeat(${myLibrary.length},1fr)`;

function createLibrary(library) {
  for (let i = 0; i <= library.length; i++) {
    let card = document.createElement("section");
    let bookName = document.createElement("div");
    let bookAuthor = document.createElement("div");
    let bookYear = document.createElement("div");
    let bookGenre = document.createElement("div");
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
