import React from 'react';
import Proptypes from 'prop-types';

const CurrentChapter = (props) => {
  const { chapter } = props;
  return (
    <article className="current-chapter-wrapper">
      <p>Current Chapter</p>
      <span className="current-chapter">{chapter}</span>
      <button type="button" className="update-progress">UpdateProgress</button>
    </article>
  );
};

CurrentChapter.propTypes = {
  chapter: Proptypes.string.isRequired,
};
export default CurrentChapter;
