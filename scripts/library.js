let myLibrary = [];

// Book Object Constructor
function Book(title, author, pages, read) {
    this.title = title;     // String
    this.author = author;   // String
    this.pages = pages;      // Number
    this.read = read;       // Boolean
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${(read) ? "have read": "not read yet"}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function render() {
    for(let i = 0; i < myLibrary.length; i++) {
        
    }
}