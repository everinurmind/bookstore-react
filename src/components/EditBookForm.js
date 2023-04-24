import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { editBook, fetchBooks } from '../redux/books/booksSlice';
import '../styles/EditBookForm.css';

const EditBookForm = ({
  URL, id, title, author, category, setIsEditFormVisible,
}) => {
  const dispatch = useDispatch();
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedAuthor, setUpdatedAuthor] = useState(author);
  const [updatedCategory, setUpdatedCategory] = useState(category);

  const handleTitleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setUpdatedAuthor(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setUpdatedCategory(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(editBook({
      URL,
      id,
      title: updatedTitle,
      author: updatedAuthor,
      category: updatedCategory,
    }))
      .then(() => {
        dispatch(fetchBooks(URL));
        setIsEditFormVisible(false);
      });
  };

  const handleClose = () => {
    setIsEditFormVisible(false);
  };

  return (
    <div className="edit-book-form">
      <FaTimes type="button" className="close-button" onClick={handleClose} />
      <h2>Edit Book</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="book-title" value={updatedTitle} onChange={handleTitleChange} placeholder="Book title" />
        <input type="text" name="book-author" value={updatedAuthor} onChange={handleAuthorChange} placeholder="Book author" />
        <select id="book-category" name="book-category" value={updatedCategory} onChange={handleCategoryChange}>
          <option value="" disabled selected hidden>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Classics">Classics</option>
        </select>
        <button type="submit" id="edit-book">Update Book</button>
      </form>
    </div>
  );
};

EditBookForm.propTypes = {
  URL: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setIsEditFormVisible: PropTypes.func.isRequired,
};

export default EditBookForm;
