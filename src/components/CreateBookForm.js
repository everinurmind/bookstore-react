import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import '../styles/CreateBookForm.css';

const CreateBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();

    dispatch(addBook({
      URL,
      newBook: {
        item_id: id,
        title,
        author,
        category,
      },
    })).then(() => { dispatch(fetchBooks(URL)); });
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="create-book-form">
      <h2>Add New Book</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="book-title" value={title} onChange={handleTitleChange} placeholder="Book title" />
        <select id="book-category" name="book-category" value={category} onChange={handleCategoryChange}>
          <option value="" disabled selected hidden>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
          <option value="Classics">Classics</option>
        </select>
        <button type="submit" id="add-book">Add Book</button>
      </form>
    </div>
  );
};

export default CreateBookForm;
