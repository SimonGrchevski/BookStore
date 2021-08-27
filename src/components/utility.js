import { useSelector } from 'react-redux';
import Book from './Book';

const generateBooks = () => {
  const state = useSelector((state) => state);
  return Object.entries(state.books).map(([k, v]) => (
    <li key={k}>
      <Book
        title={v[0].title}
        author={v[0].author || 'Author'}
        category={v[0].category}
        completed={32}
        chapter="chapter"
        id={k}
        key={k}
      />
    </li>
  ));
};

export const getOptions = () => {
  const options = ['Fantasy', 'Dystopian', 'Philosophy', 'Mystery', 'Thriller',
    'History', 'Action', 'ScienceFiction', 'Economy'];
  return options.map((o) => (
    <option key={o}>{o}</option>
  ));
};

export default generateBooks;
