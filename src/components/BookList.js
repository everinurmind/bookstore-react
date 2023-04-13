import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/booksSlice';
import BookItem from './BookItem';
import CreateBookForm from './CreateBookForm';
import '../styles/BookList.css';

const BookList = () => {
  const {
    books, loading, success, error,
  } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  useEffect(() => {
    dispatch(fetchBooks(URL));
  }, [dispatch]);

  const bookItems = success && Object.keys(books).map((key) => (
    books[key].map((book) => (
      <BookItem
        key={key}
        title={book.title}
        author={book.author}
        category={book.category}
        id={key}
      />
    ))
  ));

  return (
    <div className="book-list">
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {bookItems}
      <CreateBookForm />
    </div>
  );
};

export default BookList;
