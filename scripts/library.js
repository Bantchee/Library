let myLibrary = [];

addBookToLibrary(new Book("The Name of the Wind", "Patrick Rothfuss", 662, true, "./images/cover-the-name-of-the-wind.jpg"));
addBookToLibrary(new Book("The Institue", "Stephen King", 560, false, "#"));
addBookToLibrary(new Book("The Rage of Dragons", "Evan Winter", 438, true, "#"));
addBookToLibrary(new Book("The Game of Thrones", "George R.R. Martin", 819, false, "#"));

const article = document.querySelector('article');

// Book Object Constructor
function Book(title, author, pages, read, url) {
    this.title = title;     // String
    this.author = author;   // String
    this.pages = pages;     // Number
    this.read = read;       // Boolean
    this.url = url;         // String

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

        // Create Book Card
        const divBook = document.createElement('div');
        divBook.classList.add('book');

        // Create Title
        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = myLibrary[book].title;

        // Create Cover
        const cover = document.createElement('img');
        cover.classList.add('cover');
        cover.setAttribute("src", myLibrary[book].url);

        // Create Author
        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = myLibrary[book].author;

        // Add Title, Cover, Author to Book
        divBook.appendChild(title);
        divBook.appendChild(cover);
        divBook.appendChild(author);

        // Add Book to Article
        article.appendChild(divBook);   
    }
}

render();