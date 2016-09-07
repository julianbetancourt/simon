import React, { Component } from 'react';
import Simon from './Simon';
import '../sass/main.sass';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Simon />
      </div>
    );
  }
}

export default App;
