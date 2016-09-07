import React from 'react';

const SettingsButton = ({type}) => {
  return (
    <div className="simon__settings__control">
      <span className={`simon__settings__button simon__settings__button--${type}`}></span>
      <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
    </div>
  );
}

export default SettingsButton;
