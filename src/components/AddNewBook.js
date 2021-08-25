import React from 'react';
import './addNewBook.css';
import { useDispatch } from 'react-redux';
import { newBook } from '../redux/books/books';

const AddNewBook = () => {

  const dispatch = useDispatch();

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
          <option>Fantasy</option>
          <option>Dystopian</option>
          <option>Philosophy</option>
          <option>Mystery</option>
          <option>Thriller</option>
          <option>History</option>
          <option>Action</option>
          <option>ScienceFiction</option>
          <option>Economy</option>
        </select>

        <button type="submit" className="submitBtn">Add book</button>
      </form>
    </div>
  );
}

export default AddNewBook;