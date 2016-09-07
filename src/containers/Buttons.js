import React, { Component } from 'react';
import SimonButton from '../components/SimonButton';
import { connect } from 'react-redux';

class Buttons extends Component {
  render() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    return (
      <div>
        {
          colors.map(color => <SimonButton color={color} key={color} />)
        }
      </div>
    );

  }
}


export default Buttons;
