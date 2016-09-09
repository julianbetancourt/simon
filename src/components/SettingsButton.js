import React from 'react';

const SettingsButton = ({type, onClick, isStrict}) => {
  const condition = type === 'strict' && isStrict ? true : false;
  const cssClass = `simon__settings__button simon__settings__button--${type}`;
  return (
    <div className="simon__settings__control">
      <span
        onClick={onClick}
        className={condition ? `${cssClass} is-active` :`${cssClass}`}></span>
      <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
    </div>
  );
}

export default SettingsButton;
