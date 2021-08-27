import { updateLibrary, newBook, eraseBook } from './books/books';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = 'AHBPUHELlRzJeWxjyULG';

export const updateMiddleware = () => async (dispatch) => {
  const result = await fetch(`${url}/apps/${key}/books`);
  const res = await result.json();
  dispatch(updateLibrary(res));
};

export const newBookMiddleWare = (title, author, category, id) => async (dispatch) => {
  await fetch(`${url}/apps/${key}/books`, {
    method: 'POST',
    headers: new Headers({ 'Content-type': 'application/json; charset=UTF-8' }),
    body: JSON.stringify({
      item_id: id,
      title,
      category,
      author,
    }),
  });
  dispatch(newBook(title, author, category, id));
};

export const eraseBookMiddleWare = (id) => async (dispatch) => {
  await fetch(`${url}/apps/${key}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
  });
  dispatch(eraseBook(id));
};
