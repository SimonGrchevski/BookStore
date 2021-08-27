const addBook = 'bookStore/books/ADD_BOOK';
const removeBook = 'bookStore/books/REMOVE_BOOK';
const update = 'bookStore/books/UPDATE_LIBRARY';
const initialState = {};

const bookReducer = (state = initialState, action) => {
  if (action.type === addBook) {
    const newState = JSON.parse(JSON.stringify(state));
    newState[action.payload.id] = [action.payload];
    return newState;
  } if (action.type === removeBook) {
    const { [action.payload.id]: r, ...newState } = state;
    return newState;
  } if (action.type === update) {
    return action.payload; // Should update the API state.
  }
  return state;
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
