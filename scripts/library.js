let myLibrary = [];

addBookToLibrary(new Book("The Name of the Wind", "Patrick Rothfuss", 662, true, "./images/cover-the-name-of-the-wind.jpg"));
addBookToLibrary(new Book("The Institue", "Stephen King", 560, false, "./images/cover-the-institue.jpg"));
addBookToLibrary(new Book("The Rage of Dragons", "Evan Winter", 438, true, "./images/cover-the-rage-of-dragons.jpg"));
addBookToLibrary(new Book("The Game of Thrones", "George R.R. Martin", 819, false, "./images/cover-the-game-of-thrones.jpg"));

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

        // Create Div.Icon-Container
        const divIcons = document.createElement('d');
        divIcons.classList.add('icon-container');

            // Create Page Div
            const divPage = document.createElement('div');
            divPage.classList.add('div-page', 'div-icon');

                // Create Page Count PopUpText
                const pagePopUpText = document.createElement('span');
                pagePopUpText.classList.add('pop-up-text');
                pagePopUpText.textContent = `${myLibrary[book].pages} Pages`;

                // Create Page Count Icon
                const pageIcon = document.createElement('img');
                pageIcon.classList.add('page-icon', 'icons');
                pageIcon.setAttribute('src', 'icons/pages.svg');
                pageIcon.addEventListener('click', () => {
                    pagePopUpText.classList.toggle('show');
                });

            divPage.appendChild(pageIcon);
            divPage.appendChild(pagePopUpText);

            // Create Read Div
            const divRead = document.createElement('div');
            divRead.classList.add('div-read', 'div-icon');

                // Create Read PopUpText
                const readPopUpText = document.createElement('span');
                readPopUpText.classList.add('pop-up-text');
                readPopUpText.textContent = myLibrary[book].read ? 'Read' : 'Not Read';

                // Create Read Icon
                const readIcon = document.createElement('img');
                readIcon.classList.add('read-icon', 'icons');
                readIcon.setAttribute('src', myLibrary[book].read ? 'icons/read.svg' : 'icons/not-read.svg');
                readIcon.addEventListener('click', () => {
                    readPopUpText.classList.toggle('show');
                });

            divRead.appendChild(readIcon);
            divRead.appendChild(readPopUpText);

            // Create Edit Div
            const divEdit = document.createElement('div');
            divEdit.classList.add('div-edit', 'div-icon');

                // Create Edit Icon Button
                const editIcon = document.createElement('img');
                editIcon.classList.add('edit-icon', 'icons');
                editIcon.setAttribute('src', 'icons/edit.svg');
            
            divEdit.appendChild(editIcon);

            // Create Delete Div
            const divDelete = document.createElement('div');
            divDelete.classList.add('div-edit', 'div-icon');

                // Create Delete Icon Button
                const deleteIcon = document.createElement('img');
                deleteIcon.classList.add('delete-icon', 'icons');
                deleteIcon.setAttribute('src', 'icons/delete.svg');

                divDelete.appendChild(deleteIcon);
            
        // Add Icons to Icon Container
        divIcons.appendChild(divPage);
        divIcons.appendChild(divRead);
        divIcons.appendChild(divEdit);
        divIcons.appendChild(divDelete);

        // Add Title, Cover, Author to Book
        divBook.appendChild(title);
        divBook.appendChild(cover);
        divBook.appendChild(author);
        divBook.appendChild(divIcons);

        // Add Book to Article
        article.appendChild(divBook);   
    }
}

render();

function myFunction() {
    console.log("Hello World!")
}