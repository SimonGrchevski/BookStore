import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddNewBook from './AddNewBook';
import { updateMiddleware } from '../redux/middlewares';
import generateBooks from './utility';

const Library = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateMiddleware());
  }, []);
  return (
    <div className="library">
      <ul className="ulBooks">
        {generateBooks()}
      </ul>
      <AddNewBook />
    </div>
  );
};

export default Library;
