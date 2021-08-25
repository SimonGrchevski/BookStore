import { combineReducers } from 'redux';
import bookReducer from './books/books';

const reducers = combineReducers({
  books: bookReducer,
});

export default reducers;
