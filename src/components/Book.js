import React from 'react';
import BookInfo from './bookInfo';
import Completion from './Completion';
import CurrentChapter from './CurrentChapter';
import './book.css';

const Book = () => {
  return (
    <section className="bookWrapper flex">
      <BookInfo />
      <Completion />
      <CurrentChapter />
    </section>
  )
}

export default Book;