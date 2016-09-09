import React, { Component } from 'react';
import '../sass/main.sass';
import Buttons from './Buttons';
import Settings from './Settings';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="simon">
          <Buttons />
          <Settings />
        </div>
      </div>
    );
  }
}

export default App;
