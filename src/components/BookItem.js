import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import EditBookForm from './EditBookForm';

const BookItem = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const handleRemove = () => {
    dispatch(removeBook({ URL, id }))
      .then(() => {
        dispatch(fetchBooks(URL));
        setIsDeleted(true);
      });
  };

  const handleUpdate = () => {
    setIsEditFormVisible(true);
  };

  return (
    <div className="book-item-container">
      <ul>
        <li>
          <div className="main-sec">
            <p id="category">{category}</p>
            <h3 id="title">{title}</h3>
            <p id="author">{author}</p>
            <button type="button" id="comment-book">Comments</button>
            <button type="button" id="remove-book" onClick={() => handleRemove()}>Remove</button>
            <button type="button" id="edit-book" onClick={() => handleUpdate()}>Edit</button>
          </div>
          <div className="second-sec">
            <div className="circle" />
            <div className="percentage-sec">
              <p id="percentage">75%</p>
              <p id="completed">Completed</p>
            </div>
          </div>
          <div className="chapter-sec">
            <p id="chapter">Current Chapter</p>
            <p id="chapter-num">21</p>
            <button type="button" id="update-book">Update Progress</button>
          </div>
        </li>
        {isDeleted && <p>The book was deleted successfully!</p>}
        {isEditFormVisible && (
          <div className="overlay">
            <EditBookForm
              URL={URL}
              id={id}
              title={title}
              author={author}
              category={category}
              setIsEditFormVisible={setIsEditFormVisible}
            />
          </div>
        )}
      </ul>
    </div>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
