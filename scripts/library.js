let myLibrary = [];

addBookToLibrary(new Book("The Name of the Wind", "Patrick Rothfuss", 662, true, "./images/cover-the-name-of-the-wind.jpg"));
addBookToLibrary(new Book("The Institue", "Stephen King", 560, false, "./images/cover-the-institue.jpg"));
addBookToLibrary(new Book("The Rage of Dragons", "Evan Winter", 438, true, "./images/cover-the-rage-of-dragons.jpg"));
addBookToLibrary(new Book("The Game of Thrones", "George R.R. Martin", 819, false, "./images/cover-the-game-of-thrones.jpg"));

const article = document.querySelector('article');
const addBookBtn = document.querySelector('.add-book');

addBookBtn.addEventListener('click', () => {
    renderModal('add-btn');
});

// Render modal to body
// IN > OUT : String Object > Undefined
function renderModal(btnName, book = {}) {
    console.log(btnName, book);
    // create div#modal
    const divModal = document.createElement('div');
    divModal.setAttribute('id', 'modal');

        // create div.modal-content
        const divModalContent = document.createElement('div');
        divModalContent.classList.add('modal-content');

            // span.close btn
            const closeBtn = document.createElement('span');
            closeBtn.classList.add('close');
            closeBtn.innerHTML = '&times';
            closeBtn.addEventListener('click', () => {
                clearModal();
            });
            divModalContent.appendChild(closeBtn);
    

            // Form 
            const formModal = document.createElement('form');

                // Title
                // label.title
                const titleLabel = document.createElement('label');
                titleLabel.textContent = 'Title:';
                formModal.appendChild(titleLabel);
                
                // input.title
                const titleInput = document.createElement('input');
                titleInput.setAttribute('value', btnName === 'add-btn' ? '' : book.title);
                formModal.appendChild(titleInput);

                // Author
                // label.author
                const authorLabel = document.createElement('label');
                authorLabel.textContent = 'Author:';
                formModal.appendChild(authorLabel);
                
                // input.author
                const authorInput = document.createElement('input');
                authorInput.setAttribute('value', btnName === 'add-btn' ? '' : book.author);
                formModal.appendChild(authorInput);

                // Pages
                // label.Pages
                const pagesLabel = document.createElement('label');
                pagesLabel.textContent = 'Pages:';
                formModal.appendChild(pagesLabel);
                
                // input.Pages
                const pagesInput = document.createElement('input');
                pagesInput.setAttribute('value', btnName === 'add-btn' ? '' : book.pages);
                formModal.appendChild(pagesInput);
            
                // Image URL
                // label.image URL
                const urlLabel = document.createElement('label');
                urlLabel.textContent = 'Image URL:';
                formModal.appendChild(urlLabel);
                
                // input.image URL
                const urlInput = document.createElement('input');
                urlInput.setAttribute('value', btnName === 'add-btn' ? '' : book.url);
                formModal.appendChild(urlInput);

                // Input(check box).read?
                // read? div
                const divReadModal = document.createElement('div');
                divReadModal.classList.add('modal-read');

                    // input radio button read
                    const readInput = document.createElement('input');
                    readInput.setAttribute('type', 'checkbox');
                    if(btnName === 'edit-btn' && book.read === true ) {
                        readInput.setAttribute('checked', 'checked');
                    } 
                    divReadModal.appendChild(readInput);
                    // event listner
                    readInput.addEventListener('click', () => {
                        if(readInput.hasAttribute('checked')) {
                            readInput.removeAttribute('checked');
                        } else {
                            readInput.setAttribute('checked', 'checked');
                        }
                    });

                    // label read
                    const readLabel = document.createElement('label');
                    readLabel.textContent = "Read?"
                    divReadModal.appendChild(readLabel);

                formModal.appendChild(divReadModal);

                // button 'Add Book';
                const modalBtn = document.createElement('button');
                modalBtn.classList.add('modal-btn');
                modalBtn.textContent = btnName === 'add-btn' ? 'Add Book' : 'Edit Book';
                // addEventListener 
                    // add book to myLibrary
                    // clearModal()
                modalBtn.addEventListener('click', (event) => {
                    if (btnName === 'add-btn') {
                        addBookToLibrary(new Book(
                            titleInput.value,
                            authorInput.value,
                            pagesInput.value,
                            urlInput.value,
                            readInput.hasAttribute('checked')
                            ));
                        clearBooks();
                        renderBooks();
                    } else {
                        book.title = titleInput.value;
                        book.author = authorInput.value;
                        book.pages = pagesInput.value;
                        book.url = urlInput.value;
                        book.read = readInput.hasAttribute('checked');
                        clearBooks();
                        renderBooks();
                    }

                    // This prevents the btn from refreshing browser
                    event.preventDefault();
                    clearModal();
                }); 
                formModal.appendChild(modalBtn);

            // add form to div.modal-content
            divModalContent.appendChild(formModal); 

        // add div.modal-content to div#modal
        divModal.appendChild(divModalContent);

    // add div#modal to document
    document.body.appendChild(divModal);

    
        
    
        
            
    // Else
        // div#modal
            // div.modal-content
                // span.close
                    // clearModal()
                
                // label.title
                // input.title = book.title
                
                // label.author
                // input.author = book.author

                // label.pages
                // input.pages = book.pages
                
                // label.image URL
                // input.image URL = book.URL

                // input(check box).read?  = book.read

                // button 'Edit Book';
                    // addEventListener 
                        // edit book in myLibrary
                        // clearModal()
}

// Clear modal from body
// IN > OUT : String Object > Undefined
function clearModal(btnName, book = {}) {
    document.body.removeChild(document.querySelector('#modal'));
}



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

// Adds a book object to myLibrary array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Renders books in myLibrary array to article section
function renderBooks() {
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

                // Mouse over Icon Display Page Count
                pageIcon.addEventListener('mouseover', () => {
                    pagePopUpText.classList.toggle('show');
                });
                pageIcon.addEventListener('mouseleave', () => {
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
                
                // Mouse over Icon to display if read or not
                readIcon.addEventListener('mouseover', () => {
                    readPopUpText.classList.toggle('show');
                });
                readIcon.addEventListener('mouseleave', () => {
                    readPopUpText.classList.toggle('show');
                });
                readIcon.addEventListener('click', () => {
                    myLibrary[book].read = !myLibrary[book].read;
                    console.log('cool');
                    clearBooks();
                    renderBooks();
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

                // Create Edit PopUpText
                const editPopUpText = document.createElement('span');
                editPopUpText.classList.add('pop-up-text');
                editPopUpText.textContent = 'Edit';
                
                // Mouse over Icon to display Edit Text
                editIcon.addEventListener('mouseover', () => {
                    editPopUpText.classList.toggle('show');
                });
                editIcon.addEventListener('mouseleave', () => {
                    editPopUpText.classList.toggle('show');
                });
            
            divEdit.appendChild(editIcon);
            divEdit.appendChild(editPopUpText);
            
            // Edit btn
            divEdit.addEventListener('click', () => {
                renderModal('edit-btn', myLibrary[book]);
            });

            // Create Delete Div
            const divDelete = document.createElement('div');
            divDelete.classList.add('div-edit', 'div-icon');

                // Create Delete Icon Button
                const deleteIcon = document.createElement('img');
                deleteIcon.classList.add('delete-icon', 'icons');
                deleteIcon.setAttribute('src', 'icons/delete.svg');

                // Create Edit PopUpText
                const deletePopUpText = document.createElement('span');
                deletePopUpText.classList.add('pop-up-text');
                deletePopUpText.textContent = 'Delete';

                // Mouse over icon to display Delete Text display
                deleteIcon.addEventListener('mouseover', () => {
                    deletePopUpText.classList.toggle('show');
                });
                deleteIcon.addEventListener('mouseleave', () => {
                    deletePopUpText.classList.toggle('show');
                });
            divDelete.appendChild(deleteIcon);
            divDelete.appendChild(deletePopUpText);
            
            // Deletes a book
            divDelete.addEventListener('click', () => {
                myLibrary = myLibrary.filter(b => b.title !== myLibrary[book].title);
                clearBooks();
                renderBooks();
            });
            
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

// Clears all children in the article section
function clearBooks() {
    while (article.firstChild) {
        article.removeChild(article.firstChild);
    }
}

renderBooks();