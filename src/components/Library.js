import React from 'react';
import Book from './Book';
import AddNewBook from './AddNewBook';

const Library = () => {
  return (
    <div className="library">
      <Book />
      <Book />
      <Book />
      <AddNewBook />
    </div>
  );
}

export default Library;