// array to store books
const myLibrary = [];

// selectors
const mainBody = document.getElementById("mainBod");

const submitButton = document.getElementById("submit");

let bookCount = 0;

// book constructor
function Book(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
    this.count = bookCount;
    this.id = bookCount;
    bookCount++;
}

// wrapper to add book
function addBookToLibrary(title, author, genre, read) {
    const newBook = new Book(title, author, genre, read);
    myLibrary.push(newBook);
}
// helper for createCardBook
function createAppend(elem, text, parent){
    const newElem = document.createElement(elem);
    newElem.textContent = text;
    parent.append(newElem);
}

function createCardBook(curBook){
    const card = document.createElement("div");
    card.setAttribute("class", "bookCards")

    createAppend("h2", curBook.title, card);
    createAppend("h3", curBook.author, card);
    createAppend("h3", curBook.genre, card);
    createAppend("h3", curBook.read, card);

    const singleButton = document.createElement("button");
    singleButton.setAttribute("class", "remButton");
    singleButton.setAttribute("id", "remButton" + curBook.id);
    singleButton.textContent = "Remove Book";
    card.append(singleButton);

    mainBody.append(card);
}

// display book onto <main>
function displayBooks() {
    mainBody.innerHTML = "";

    for(let i = 0; i < myLibrary.length; i++){
        createCardBook(myLibrary[i]);
    }
}

function removeBook(ind) {
    let index = -1;

    for (let i = 0; i < myLibrary.length; i++){
        if(myLibrary[i].id == ind){
            index = i;
            break;
        }
    }

    if(ind >= 0 && ind < myLibrary.length){
        myLibrary.splice(ind, 1);
        displayBooks();
    }
}

// Add listener to fix null issue
document.addEventListener("DOMContentLoaded", (e) =>{
    const form = document.getElementById("form");

    // when click add with information
    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        // get the form's value for book
        let curTitle = document.getElementById("title").value;
        let curAuthor = document.getElementById("author").value;
        let curGenre = document.getElementById("genre").value;
        let curRead = document.querySelector('input[name="read_stat"]:checked').value;
    
        // make book
        addBookToLibrary(curTitle, curAuthor, curGenre, curRead);
    
        // refresh? display
        displayBooks();
    });

    mainBody.addEventListener("click", (e) =>{
        if(e.target.classList.contains("remButton")){
            const curDel = e.target.id;
            const ind = parseInt(curDel.split("remButton")[1]);
            removeBook(ind);
        }
    });
})



