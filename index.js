'use strict';

class Book {
    constructor(
        author = "Unknown",
        title = "Unknown",
        pages = "0",
        isRead = "false"
    )
    {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.isRead = isRead;
    }
}

let myLibrary = [];

function addBookToLibrary(newBook) {
    if (myLibrary.some((book) => book.title === newBook.title)) return false;
    myLibrary.push(newBook);
    saveLocal();
    return true;

  }

  function removeBookfromLibrary(bookTitle) {
      myLibrary = myLibrary.filter((book) => book.title !== bookTitle);
      saveLocal();
}

function getBook(bookTitle) {
 for (let book of myLibrary) {
     if (book.title === bookTitle) {
         return book;
     }
 }
 return null;
}

const newBookButton = document.querySelector(".new_book");
// const addBook = document.querySelector("showup");
 const overlay = document.querySelector(".js-overlay");

newBookButton.addEventListener("click", showForm )
overlay.addEventListener("click", closeForm )

function showForm() {
    //document.getElementById("demo").innerHTML = "Hello World";
    form.reset();
    addBook.classList.add(".book_form--active") 
    overlay.classList.add(".overlay--active")
}

function closeForm() {
    document.getElementById("demo").innerHTML = "Hello World";
    addBook.classList.remove(".book_form--active")
    overlay.classList.remove(".overlay--active")
}

const form = document.querySelector(".js-popup-form");
form.addEventListener("submit", addbook);

function addBook(event) {
    event.preventDefault();
    if (addBookToLibrary(getBookFromInput())) {
        updateBookGrid();
        closeForm();
    } else {
        alert("This book already in the the library")
    }
}

//document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }


