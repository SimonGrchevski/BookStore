import React from 'react';

const Completion = (props) => {
  const {completed}= props;
  return (
    <article className="completionWrapper flex">
      <div className="completeImageDiv">
        <img alt="Completion"></img>
      </div>
      <div>
        <p className="completed"> {completed} %</p>
        <p>completed</p>
      </div>
    </article>
  );
}

export default Completion;