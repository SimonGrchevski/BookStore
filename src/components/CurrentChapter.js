import React from 'react';
import Proptypes from 'prop-types';

const CurrentChapter = (props) => {
  const { currentChapter } = props;
  return (
    <article className="currentChapterWrapper">
      <p>CurrentChapter</p>
      <span className="currentChapter">{currentChapter}</span>
      <button type="button" className="updateProgress">UpdateProgress</button>
    </article>
  );
};

CurrentChapter.propTypes = {
  currentChapter: Proptypes.string.isRequired,
};
export default CurrentChapter;
