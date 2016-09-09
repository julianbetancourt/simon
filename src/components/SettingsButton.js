import React from 'react';

const SettingsButton = ({type, onClick, isStrict}) => {
  const condition = type === 'strict' && isStrict ? true : false;
  return (
    <div className="simon__settings__control">
      <span
        onClick={onClick}
        className={condition ?
          `simon__settings__button simon__settings__button--${type} is-active` :
          `simon__settings__button simon__settings__button--${type}`}></span>
      <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
    </div>
  );
}

export default SettingsButton;
