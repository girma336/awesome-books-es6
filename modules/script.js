import Book from './bookClass.js';

export default class UI {
    static getBookLS = () => {
      let bookLocalStore;
      if (localStorage.getItem('books') === null) {
        bookLocalStore = [];
      } else {
        bookLocalStore = JSON.parse(localStorage.getItem('books'));
      }
      return bookLocalStore;
    }

      static add = (book) => {
        const bookList = this.getBookLS();
        bookList.push(book);
        localStorage.setItem('books', JSON.stringify(bookList));
      }

      static remove = (title, author) => {
        const bookList = this.getBookLS();
        bookList.forEach((book, index) => {
          if (book.title === title && book.author === author) {
            bookList.splice(index, 1);
          }
        });
        localStorage.setItem('books', JSON.stringify(bookList));
      }

      static displayBooks = () => {
        const books = this.getBookLS();
        books.forEach((book) => this.libraryBooks(book));
      }

      static libraryBooks = (book) => {
        const library = document.querySelector('.library');
        const newLib = document.createElement('div');

        newLib.innerHTML = `<div class="new-lib ${book.author}">
          <p><q>${book.title}</q> by <i>${book.author}</i></p>
            <button class="remove">
            Remove
            </button>
            </div>`;
        newLib.className = 'color-block';
        library.appendChild(newLib);
      }

      static deleteBook = (el) => {
        if (el.classList.contains('remove')) {
          el.parentElement.remove();
        }
      }

      static clearFields = () => {
        document.querySelector('.input-book').value = '';
        document.querySelector('.input-author').value = '';
      }

      static createBooks = (title, author) => {
        const book = new Book(title, author);
        this.libraryBooks(book);
        this.add(book);
        this.clearFields();
      }
}