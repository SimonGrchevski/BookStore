import React from 'react';
import Book from './Book';
import AddNewBook from './AddNewBook';
import { useSelector} from 'react-redux';

const Library = () => {

  const state = useSelector(state => state);
  const books = state.books.map(e => {
    return (
      <li key={e.title}><Book 
      title= {e.title}
      category = {e.category}
      completed = {e.completed}
      chapter ={ e.chapter}
      /></li>
    )
  });

  return (
    <div className="library">
    <ul>
        {books};
    </ul>
      <AddNewBook />
    </div>
  );
}

export default Library;