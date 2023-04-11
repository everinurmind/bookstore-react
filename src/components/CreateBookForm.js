import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import '../styles/CreateBookForm.css';

function CreateBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="create-book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="book-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
        <input type="text" name="book-author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Book author" />
        <button type="submit" id="add-book">Add Book</button>
      </form>
    </div>
  );
}

export default CreateBookForm;
