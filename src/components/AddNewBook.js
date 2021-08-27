import React, { useState } from 'react';
import './addNewBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { newBook } from '../redux/books/books';

const getOptions = () => {
  const options = ['Fantasy', 'Dystopian', 'Philosophy', 'Mystery', 'Thriller',
    'History', 'Action', 'ScienceFiction', 'Economy'];
  return options.map((o) => (
    <option key={o}>{o}</option>
  ));
};

const newBookMiddleWare = (title, author, category, id) => async (dispatch) => {
  console.log('Called the newBook MiddleWare');
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AHBPUHELlRzJeWxjyULG/books', {
    method: 'POST',
    headers: new Headers({ 'Content-type': 'application/json; charset=UTF-8' }),
    body: JSON.stringify({
      item_id: id,
      title,
      category,
      author,
    }),
  });
  dispatch(newBook(title, author, category, id));
};

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const options = getOptions();

  return (
    <div className="newBookWrapper">
      <h2>
        Add new Book
      </h2>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          const category = document.querySelector('.newBookCategory').value;
          dispatch(newBookMiddleWare(title, author, category, uuidv4()));
        }}
      >
        <input type="text" className="newBookTitile" placeholder="Book titile" required onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className="newBookAuthor" placeholder="Author" required onChange={(e) => setAuthor(e.target.value)} />
        <select className="newBookCategory" required>
          {options}
        </select>

        <button type="submit" className="submitBtn">Add book</button>
      </form>
    </div>
  );
};

export default AddNewBook;
