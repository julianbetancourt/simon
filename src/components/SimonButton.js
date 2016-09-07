import React from 'react';

const SimonButton = ({color}) => {
  return (
    <div className={`simon__button simon__button--${color}`}></div>
  );
}

export default SimonButton;
