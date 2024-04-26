// array to store books
const myLibrary = [];

// selectors
const mainBody = document.getElementsByClassName(".body");

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

// display book onto <main>
function displayBooks() {
    
}


