import React, { useState } from 'react';
import './addNewBook.css';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { newBookMiddleWare } from '../redux/middlewares';
import { getOptions } from './utility';

// const getOptions = () => {
//   const options = ['Fantasy', 'Dystopian', 'Philosophy', 'Mystery', 'Thriller',
//     'History', 'Action', 'ScienceFiction', 'Economy'];
//   return options.map((o) => (
//     <option key={o}>{o}</option>
//   ));
// };

const AddNewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

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
          {getOptions()}
        </select>

        <button type="submit" className="submitBtn">Add book</button>
      </form>
    </div>
  );
};

export default AddNewBook;
