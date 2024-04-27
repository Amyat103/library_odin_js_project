// array to store books
const myLibrary = [];

// selectors
const mainBody = document.getElementsByClassName(".body");
const form = document.getElementById("#form");
const submitButton = document.getElementById("#submit");

// book constructor
function Book(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genres = genre;
    this.read = read;
}

// wrapper to add book
function addBookToLibrary(title, author, genre, read) {
    const newBook = new Book(title, author, genre, read);
    myLibrary.push(newBook);
}
// helper for createCardBook
function createAppend(elem, text, parent){
    const newElem = document.createElement(elem);
    newElem.textContent(text);
    parent.createAppend(newElem);
}

function createCardBook(curBook){
    const card = document.createElement("div");

    createAppend("h2", curBook.title, card);
    createAppend("h3", curBook.author, card);
    createAppend("h3", curBook.genre, card);
    createAppend("h3", curBook.read, card);

    mainBody.append(card);
}

// display book onto <main>
function displayBooks() {
    mainBody = "";

    for(let i = 0; i < myLibrary.length; i++){
        createCardBook(myLibrary[i]);
    }
}

// when click add with information
form.addEventListener("submit", (e) =>{

    // get the form's value for book
    let curTitle = document.getElementById("title");
    let curAuthor = document.getElementById("author");
    let curGenre = document.getElementById("genre");
    let curRead = document.getElementById("radForm");

    // make book
    addBookToLibrary(curTitle.value, curAuthor.value, curGenre.value, curRead.value);

    // refresh? display
    displayBooks();

})


