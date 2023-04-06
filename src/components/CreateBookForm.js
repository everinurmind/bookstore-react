import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/CreateBookForm.css';

function CreateBookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook({ title, category });
    setTitle('');
    setCategory('');
  };

  return (
    <div className="create-book-form">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="book-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
        <select id="book-category" name="book-category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Category</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

CreateBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default CreateBookForm;
