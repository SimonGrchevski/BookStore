import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddNewBook from './AddNewBook';
import { updateLibrary } from '../redux/books/books';

// SHOULD REPLACE THE API CALL ITS HERE JUST FOR NOW
const fetchApiLib = () => async function (dispatch) {
  console.log('Called async');
  const j = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AHBPUHELlRzJeWxjyULG/books');
  const res = await j.json();
  dispatch(updateLibrary(res));
};

// SHOULD BE REPLACED AS WELL
const generateBooks = () => {
  const state = useSelector((state) => state);
  const values = Object.values(state.books);
  const ids = Object.keys(state.books);
  let idCounter = -1;

  const books = values.map((e) => {
    idCounter += 1;
    return (
      <li key={ids[idCounter]}>
        <Book
          title={e[0].title}
          author={e[0].author || 'Author'}
          category={e[0].category}
          completed={32}
          chapter="chapter"
          id={ids[idCounter]}
          key={ids[idCounter]}
        />
      </li>
    );
  });
  return books;
};

const Library = () => {
  const dispatch = useDispatch();
  const books = generateBooks();
  useEffect(() => {
    dispatch(fetchApiLib());
  }, []);
  return (
    <div className="library">
      <ul className="ulBooks">
        {books}
      </ul>
      <AddNewBook />
    </div>
  );
};

export default Library;
