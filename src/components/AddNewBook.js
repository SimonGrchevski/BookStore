import React from 'react';
import './addNewBook.css';

const AddNewBook = () => {
  return (
    <div className="newBookWrapper">
      <h2>
        Add new Book
      </h2>
      <form className = "flex">
        <input type="text" className="newBookTitile" placeholder="Book titile" required></input>
        <select className="newBookCategory" required>
          <option>Fantasy</option>
          <option>Dystopian</option>
          <option>Philosophy</option>
          <option>Mystery</option>
          <option>Thriller</option>
          <option>History</option>
        </select>

        <button type="submit" className="submitBtn">Add book</button>
      </form>
    </div>
  );
}

export default AddNewBook;