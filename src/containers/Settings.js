import React, { Component } from 'react';
import Strict from './Strict';
import Count from './Count';
import Start from './Start';
import On from './On';

class Settings extends Component {
  render() {
    return (
      <div className="simon__settings">
        <h1>Simon</h1>
        <div className="simon__settings__buttons">
          <Count />
          <Strict />
          <Start />
        </div>
        <On />
      </div>
    );

  }
}

export default Settings;
