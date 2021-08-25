import { v4 as uuidv4 } from 'uuid';

const addBook = 'bookStore/books/ADD_BOOK';
const removeBook = 'bookStore/books/REMOVE_BOOK';
const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case addBook:
      return state.concat(action.payload);
    case removeBook:
      return state.filter((e) => e.id !== action.payload.id);
    default:
      return state;
  }
};

export function newBook(title, category) {
  return (dispatch) => {
    dispatch({
      type: addBook,
      payload: {
        title,
        category,
        completed: 0,
        chapter: 'Introduction',
        id: uuidv4(),
      },
    });
  };
}

export function eraseBook(id) {
  return (dispatch) => {
    dispatch({
      type: removeBook,
      payload: {
        id,
      },
    });
  };
}

export default bookReducer;
