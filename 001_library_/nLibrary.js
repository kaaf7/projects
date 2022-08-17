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
];
let bookObj = { bookName: "", AuthorName: "", bookYear: "", bookGenre: "" };

let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(5,1fr)";
board.style.gridTemplateRows = `repeat(${myLibrary.length},1fr)`;

function createLibrary(library) {
  for (let i = 0; i <= library.length; i++) {
    let card = document.createElement("section");
    card.style.backgroundColor = "grey";
    let bookName = document.createElement("div");
    let bookAuthor = document.createElement("div");
    bookName.innerHTML = "book Name";
    bookAuthor.innerHTML = "book Author";
    card.appendChild(bookName);
    card.appendChild(bookAuthor);

    board.insertAdjacentElement("beforeend", card);
  }
}

createLibrary(myLibrary);

function createBook(book) {}
