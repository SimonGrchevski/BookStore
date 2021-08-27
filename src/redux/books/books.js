const addBook = 'bookStore/books/ADD_BOOK';
const removeBook = 'bookStore/books/REMOVE_BOOK';
const update = 'bookStore/books/UPDATE_LIBRARY';
const initialState = {};

const bookReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case addBook:
      newState = JSON.parse(JSON.stringify(state));
      newState[action.payload.id] = [action.payload];
      return newState;
    case removeBook:
      return state.filter((e) => e.id !== action.payload.id);
    case update:
      return action.payload; // Should update the API state.
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

export function newBook(title, author, category, id) {
  return {
    type: addBook,
    payload: {
      title,
      author,
      category,
      completed: 0,
      chapter: 'Introduction',
      id,
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
