/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ID = 'pIaHI7JuSil5Z41aKVHr';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL + API_ID}/books`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async ({ newBook }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${URL + API_ID}/books`, newBook, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${URL + API_ID}/books/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editBook = createAsyncThunk(
  'books/editBook',
  async ({ id, updatedBook }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`${URL + API_ID}/books/${id}`, updatedBook, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  books: [],
  loading: false,
  success: false,
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      // fetchBooks cases
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      // addBook cases
      .addCase(addBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      // removeBook cases
      .addCase(removeBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })
      // editBook cases
      .addCase(editBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(editBook.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.books = state.books.map((book) => {
          if (book.id === action.payload.id) {
            return action.payload;
          }
          return book;
        });
      })
      .addCase(editBook.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
