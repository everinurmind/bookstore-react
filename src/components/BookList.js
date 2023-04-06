import React from 'react';
import CreateBookForm from './CreateBookForm';
import '../styles/BookList.css';

function BookList() {
  return (
    <div className="book-list">
      <ul>
        <li>
          <h3>Book Title</h3>
          <a href="/">Author Name</a>
        </li>
      </ul>
      <CreateBookForm />
    </div>
  );
}

export default BookList;
