import React, { useState } from 'react';
import '../styles/Categories.css';

function Categories() {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <div className="categories-container">
      <button type="button" className="categories-button" onClick={handleClick}>
        {status ? 'Status: Active' : 'Status: Inactive'}
      </button>
    </div>
  );
}

export default Categories;
