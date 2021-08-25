import React from 'react';
import PropTypes from 'prop-types';

const Completion = (props) => {
  const { completed } = props;
  return (
    <article className="completionWrapper flex">
      <div className="completeImageDiv">
        <div className="progress" />
      </div>
      <div>
        <p className="completed">
          {' '}
          {completed}
          {' '}
          %
        </p>
        <p>completed</p>
      </div>
    </article>
  );
};

Completion.propTypes = {
  completed: PropTypes.number.isRequired,
};
export default Completion;
