import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { eraseBook } from '../redux/books/books';

const BookInfo = (props) => {
  const dispatch = useDispatch();
  const { title, category, id } = props;
  return (
    <article className="bookInfoWrapper">
      <div className="bookInfo">
        <h5 className="bookCategory">{category}</h5>
        <h3 className="bookTitle">{title}</h3>
        <h5 className="bookAuthor">BookAuthor</h5>
      </div>
      <div className="optionsSection">
        <ul className="flex optionsUl">
          <li>Comments</li>
          <li><button type="button" id={id} onClick={(e) => dispatch(eraseBook(e.target.id))}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
    </article>
  );
};

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BookInfo;
