import React from 'react';
import './addNewBook.css';
import { useDispatch } from 'react-redux';
import { newBook } from '../redux/books/books';

const AddNewBook = () => {

  const dispatch = useDispatch();
  const options = ['Fantasy', 'Dystopian', 'Philosophy', 'Mystery','Thriller',
                    'History', 'Action', 'ScienceFiction','Economy'];
  const jsxOptions = options.map(o => {
    return (
      <option>{o}</option>
    );
  })

  return (
    <div className="newBookWrapper">
      <h2>
        Add new Book
      </h2>
      <form className="flex" onSubmit={ (e) => {
        e.preventDefault();
        const title = document.querySelector('.newBookTitile').value;
        const category = document.querySelector('.newBookCategory').value;
        dispatch(newBook(title,category));
         }}>
        <input type="text" className="newBookTitile" placeholder="Book titile" required></input>
        <select className="newBookCategory" required>
          {jsxOptions}
        </select>

        <button type="submit" className="submitBtn">Add book</button>
      </form>
    </div>
  );
}

export default AddNewBook;