import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddNewBook from './AddNewBook';

const Library = () => {
  const state = useSelector((state) => state);
  const books = state.books.map((e) => (
    <li key={e.title}>
      <Book
        title={e.title}
        category={e.category}
        completed={e.completed}
        chapter={e.chapter}
      />
    </li>
  ));

  return (
    <div className="library">
      <ul className="ulBooks">
        {books}
        ;
      </ul>
      <AddNewBook />
    </div>
  );
};

export default Library;
