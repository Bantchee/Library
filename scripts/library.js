let myLibrary = [];

addBookToLibrary(new Book("The Name of the Wind", "Patrick Rothfuss", 662, "#", true));
addBookToLibrary(new Book("The Institue", "Stephen King", 560, "#", false));
addBookToLibrary(new Book("The Rage of Dragons", "Evan Winter", 438, "#", true));
addBookToLibrary(new Book("The Game of Thrones", "George R.R. Martin", 819, "#", false));

const article = document.querySelector('article');

// Book Object Constructor
function Book(title, author, pages, url, read) {
    this.title = title;     // String
    this.author = author;   // String
    this.pages = pages;     // Number
    this.url = url;         // String
    this.read = read;       // Boolean

    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${(read) ? "have read": "not read yet"}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function render() {
    for(let book in myLibrary) {
        console.log(myLibrary[book])

        const div = document.createElement('div');
        
        div.textContent = myLibrary[book].author;
        article.appendChild(div);   
    }
}

render();