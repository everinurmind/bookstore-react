import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

const BookItem = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  const [isDeleted, setIsDeleted] = useState(false);

  const handleRemove = () => {
    dispatch(removeBook({ URL, id }))
      .then(() => {
        dispatch(fetchBooks(URL));
        setIsDeleted(true);
      });
  };

  return (
    <ul>
      <li>
        <div>
          <p id="category">{category}</p>
          <h3>{title}</h3>
          <p id="author">{author}</p>
        </div>
        <button type="button" id="remove-book" onClick={() => handleRemove()}>Remove Book</button>
      </li>
      {isDeleted && <p>The book was deleted successfully!</p>}
    </ul>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
