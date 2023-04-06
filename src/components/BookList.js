import React, { useState } from 'react';
import CreateBookForm from './CreateBookForm';
import '../styles/BookList.css';

function BookList() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.category}</p>
          </li>
        ))}
      </ul>
      <CreateBookForm addBook={addBook} />
    </div>
  );
}

export default BookList;
