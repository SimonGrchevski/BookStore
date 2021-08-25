import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from './bookInfo';
import Completion from './Completion';
import CurrentChapter from './CurrentChapter';
import './book.css';

const Book = (props) => {
  const {
    title, category, completed, chapter,
  } = props;
  return (
    <section className="bookWrapper flex">
      <BookInfo
        title={title}
        category={category}
      />
      <Completion completed={completed} />
      <CurrentChapter chapter={chapter} />
    </section>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};
export default Book;
