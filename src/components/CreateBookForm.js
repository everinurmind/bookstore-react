import React from 'react';
import '../styles/CreateBookForm.css';

function CreateBookForm() {
  return (
    <div className="create-book-form">
      <h2>Add New Book</h2>
      <form id>
        <input type="text" name="book-title" value="Book title" />
        <select id="book-category" name="book-category">
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

export default CreateBookForm;
