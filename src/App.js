import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Header from './components/Header';
import BookList from './components/BookList';
import Categories from './components/Categories';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Header />
        <ul>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/books" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
