import React from 'react';

const SimonButton = ({color, onClick}) => {
  return (
    <div onClick={onClick} className={`simon__button simon__button--${color}`}></div>
  );
}

export default SimonButton;
