import React from 'react';
import PropTypes from 'prop-types';

const Completion = (props) => {
  const { completed } = props;
  return (
    <article className="completion-wrapper flex">
      <div className="background-wrapper">
        <div className="progress" />
      </div>
      <div>
        <p className="completed">
          {' '}
          {completed}
          {' '}
          %
        </p>
        <p className="completed-p">completed</p>
      </div>
    </article>
  );
};

Completion.propTypes = {
  completed: PropTypes.number.isRequired,
};
export default Completion;
