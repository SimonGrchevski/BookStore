import React from 'react';
import BookInfo from './bookInfo';
import Completion from './Completion';
import CurrentChapter from './CurrentChapter';
import './book.css';

const Book = (props) => {
  const {title,category,completed,chapter} = props;
  return (
    <section className="bookWrapper flex">
      <BookInfo 
      title={title}
      category={category} />
      <Completion completed={completed}/>
      <CurrentChapter chapter={chapter}/>
    </section>
  )
}

export default Book;