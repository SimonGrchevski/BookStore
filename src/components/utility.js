import { useSelector } from 'react-redux';
import Book from './Book';

/*
  I am totally aware why eslint is forbidding props spreading, but I know
  what props I am sending to the component and they are all useful.
  ps: I was kinda lazy too.
*/
const generateBooks = () => {
  const state = useSelector((state) => state);
  return Object.entries(state.books).map(([k, v]) => (
    <li key={k}>
      <Book
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...v[0]}
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
