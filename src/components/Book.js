import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from './bookInfo';
import Completion from './Completion';
import CurrentChapter from './CurrentChapter';
import '../styles/book.css';

const Book = (props) => {
  const {
    title, author,
    category, completed,
    chapter, id,
  } = props;
  return (
    <section className="bookWrapper flex">
      <BookInfo
        title={title}
        author={author}
        category={category}
        id={id}
      />
      <Completion completed={completed} />
      <CurrentChapter chapter={chapter} />
    </section>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
