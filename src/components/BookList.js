import React, { useState } from 'react';
import CreateBookForm from './CreateBookForm';
import '../styles/BookList.css';

function BookList() {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    const newBook = { ...book, id: Date.now() };
    setBooks([...books, newBook]);
  };

  const removeBook = (book) => {
    setBooks(books.filter((b) => b.id !== book.id));
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <h3>{book.title}</h3>
              <p>{book.category}</p>
            </div>
            <button type="button" id="remove-book" onClick={() => removeBook(book)}>Remove book</button>
          </li>
        ))}
      </ul>
      <CreateBookForm addBook={addBook} />
    </div>
  );
}

export default BookList;
