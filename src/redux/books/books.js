import { v4 as uuidv4 } from 'uuid';

const addBook = 'bookStore/books/ADD_BOOK';
const removeBook = 'bookStore/books/REMOVE_BOOK';
const update = 'bookStore/books/UPDATE_LIBRARY';
const initialState = {};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case addBook:
      return state.concat(action.payload);
    case removeBook:
      return state.filter((e) => e.id !== action.payload.id);
    case update:
      return { ...action.payload }; // Should update the API state.
    default:
      return state;
  }
};

export function updateLibrary(apiState) {
  console.log('Called the action creator');
  return {
    type: update,
    payload: apiState,
  };
}

export function newBook(title, author, category) {
  return {
    type: addBook,
    payload: {
      title,
      author,
      category,
      completed: 0,
      chapter: 'Introduction',
      id: uuidv4(),
    },
  };
}

export function eraseBook(id) {
  return {
    type: removeBook,
    payload: {
      id,
    },
  };
}

export default bookReducer;
