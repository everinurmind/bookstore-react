import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateBookForm from './CreateBookForm';
import { removeBook } from '../redux/books/booksSlice';
import '../styles/BookList.css';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook({ id }));
  };

  return (
    <div className="book-list">
      <ul>
        {books && books.map((book) => (
          <li key={book.id}>
            <div>
              <p id="category">
                {' '}
                {book.category}
              </p>
              <h3>{book.title}</h3>
              <p id="author">
                {' '}
                {book.author}
              </p>
            </div>
            <button type="button" id="remove-book" onClick={() => handleRemoveBook(book.id)}>Remove book</button>
          </li>
        ))}
      </ul>
      <CreateBookForm />
    </div>
  );
};

export default BookList;
