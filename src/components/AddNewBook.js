import React, { useState } from 'react';
import './addNewBook.css';
import { useDispatch } from 'react-redux';
import { newBook } from '../redux/books/books';

const getOptions = () => {
  const options = ['Fantasy', 'Dystopian', 'Philosophy', 'Mystery', 'Thriller',
    'History', 'Action', 'ScienceFiction', 'Economy'];
  return options.map((o) => (
    <option key={o}>{o}</option>
  ));
};

const fetchApiLib = () => async function () {
  console.log('Called async');
  const j = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AblqEJl1fDfXqpmG7PLp/books');
  const res = await j.json();
  console.log(res);
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
          dispatch(newBook(title, author, category));
        }}
      >
        <input type="text" className="newBookTitile" placeholder="Book titile" required onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className="newBookAuthor" placeholder="Author" required onChange={(e) => setAuthor(e.target.value)} />
        <select className="newBookCategory" required>
          {options}
        </select>

        <button type="submit" className="submitBtn">Add book</button>
        <button type="button" className="submitBtn" onClick={() => { dispatch(fetchApiLib()); }}>SHIT BUTTON</button>
      </form>
    </div>
  );
};

export default AddNewBook;
