import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';
import '../styles/Categories.css';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    if (showCategories) {
      dispatch(checkStatus());
    }
  }, [dispatch, showCategories]);

  const handleCheckStatus = () => {
    setShowCategories(true);
  };

  return (
    <div className="categories-container">
      <button className="categories-button" type="submit" onClick={handleCheckStatus}>Check Status</button>
      {showCategories && categories.map((category) => (
        <div className="slice-render" key={category}>{category}</div>
      ))}
    </div>
  );
}

export default Categories;
