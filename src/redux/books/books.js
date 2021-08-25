const addBook = 'AddBook';
// initial state just for testing right now
const initialState = [
  {
    title: 'The hunger games', category: 'Action', completed: 64, chapter: 'Chapter 17',
  },
  {
    title: 'Dune', category: 'ScienceFiction', completed: 8, chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    title: 'Capital in the Twenty-First Century', category: 'Economy', completed: 0, chapter: 'Introduction',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case addBook:
      return state.concat(action.payload);
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
      },
    });
  };
}

export default bookReducer;
