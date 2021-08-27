import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { eraseBookMiddleWare } from '../redux/middlewares';

const BookInfo = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, category, id,
  } = props;
  return (
    <article className="book-info-wrapper">
      <div className="book-info">
        <h5 className="book-category">{category}</h5>
        <h3 className="book-title">{title}</h3>
        <h5 className="book-author">{author}</h5>
      </div>
      <div className="options-section">
        <ul className="flex options-ul">
          <li>Comments</li>
          <li><button type="button" id={id} onClick={(e) => dispatch(eraseBookMiddleWare(e.target.id))}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
    </article>
  );
};

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default BookInfo;
