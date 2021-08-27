import { useSelector } from 'react-redux';
import Book from './Book';

const generateBooks = () => {
  const state = useSelector((state) => state);
  const values = Object.values(state.books);
  const ids = Object.keys(state.books);
  let idCounter = -1;

  const books = values.map((e) => {
    idCounter += 1;
    return (
      <li key={ids[idCounter]}>
        <Book
          title={e[0].title}
          author={e[0].author || 'Author'}
          category={e[0].category}
          completed={32}
          chapter="chapter"
          id={ids[idCounter]}
          key={ids[idCounter]}
        />
      </li>
    );
  });
  return books;
};

export const getOptions = () => {
  const options = ['Fantasy', 'Dystopian', 'Philosophy', 'Mystery', 'Thriller',
    'History', 'Action', 'ScienceFiction', 'Economy'];
  return options.map((o) => (
    <option key={o}>{o}</option>
  ));
};

export default generateBooks;
