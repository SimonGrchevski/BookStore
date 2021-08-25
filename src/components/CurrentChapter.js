import React from 'react';

const CurrentChapter = (props) => {
  const {currentChapter} = props
  return (
    <article className="currentChapterWrapper">
      <p>CurrentChapter</p>
      <span className="currentChapter">{currentChapter}</span>
      <button type="button" className="updateProgress">UpdateProgress</button>
    </article>
  );
}

export default CurrentChapter;