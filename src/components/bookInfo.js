import React from 'react';

const BookInfo = (props) => {
  const {title, category} = props;
  return (
    <article className="bookInfoWrapper">
      <div className="bookInfo">
        <h5 className="bookCategory">{category}</h5>
        <h3 className="bookTitle">{title}</h3>
        <h5 className="bookAuthor">BookAuthor</h5>
      </div>
      <div className="optionsSection">
        <ul className ="flex optionsUl">
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
    </article>
  );
}

export default BookInfo;