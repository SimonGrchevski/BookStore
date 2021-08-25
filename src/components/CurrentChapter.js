import React from 'react';
import Proptypes from 'prop-types';

const CurrentChapter = (props) => {
  const { chapter } = props;
  return (
    <article className="currentChapterWrapper">
      <p>CurrentChapter</p>
      <span className="currentChapter">{chapter}</span>
      <button type="button" className="updateProgress">UpdateProgress</button>
    </article>
  );
};

CurrentChapter.propTypes = {
  chapter: Proptypes.string.isRequired,
};
export default CurrentChapter;
