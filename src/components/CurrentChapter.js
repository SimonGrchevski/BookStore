import React from 'react';

const CurrentChapter = () => {
  return (
    <article className="currentChapterWrapper">
      <p>CurrentChapter</p>
      <span className="currentChapter">Chapter 17</span>
      <button type="button" className="updateProgress">UpdateProgress</button>
    </article>
  );
}

export default CurrentChapter;