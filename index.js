import UI from './modules/script.js';
import { DateTime } from './modules/luxon.js';

const list = document.getElementById('list');
const addBook = document.getElementById('add-new');
const contact = document.getElementById('contact');
const addBookOne = document.querySelector('.add-book-1');
const bookList = document.querySelector('.book-list-1');
const contactOne = document.querySelector('.contact-me-1');

list.addEventListener('click', () => {
  bookList.classList.add('list-active');
  addBookOne.classList.remove('addBook-active');
  contactOne.classList.remove('contact-active');
  list.classList.add('color-red');
  addBook.classList.remove('color-red');
  contact.classList.remove('color-red');
});

addBook.addEventListener('click', () => {
  addBookOne.classList.add('addBook-active');
  bookList.classList.remove('list-active');
  contactOne.classList.remove('contact-active');
  addBook.classList.add('color-red');
  list.classList.remove('color-red');
  contact.classList.remove('color-red');
});

contact.addEventListener('click', () => {
  contactOne.classList.add('contact-active');
  bookList.classList.remove('list-active');
  addBookOne.classList.remove('addBook-active');
  contact.classList.add('color-red');
  list.classList.remove('color-red');
  addBook.classList.remove('color-red');
});

window.addEventListener('load', () => {
  bookList.classList.add('list-active');
  list.classList.add('color-red');
});

setInterval(() => {
  const dt = DateTime.now();
  const time = document.querySelector('#demo');
  time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);

window.onload = () => {
  UI.displayBooks();
};
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.input-book').value;
  const author = document.querySelector('.input-author').value;
  if (title !== '' && author !== '') {
    UI.createBooks(title, author);
  }
});

document.querySelector('.library').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  const fe = e.target.previousSibling.previousSibling;
  UI.remove(fe.firstChild.textContent, fe.lastChild.textContent);
  document.location.reload(true);
});
