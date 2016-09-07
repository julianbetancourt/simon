import React, { Component } from 'react';
import Buttons from './Buttons';
import Settings from './Settings';

class Simon extends Component {
  render() {
    return (
      <div className="simon">
        <Buttons />
        <Settings />
      </div>
    );
  }
}

export default Simon;
