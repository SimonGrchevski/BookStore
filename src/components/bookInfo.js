import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = (props) => {
  const { title, category } = props;
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
          <li><button type="button">Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
    </article>
  );
};

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default BookInfo;
