import React, { Component } from 'react';
import SettingsButton from '../components/SettingsButton';
import { connect } from 'react-redux';
import { simonClick } from '../actions';

class Start extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
  }
  handleStart(e) {
    const { isOn, simonClick, player } = this.props;
    if (isOn && !player) {
      const r = Math.floor(Math.random() * 4);
      simonClick(r)
    }
  }
  render() {

    return (
      <SettingsButton onClick={this.handleStart} type="start" />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOn: state.simon.isOn,
    player: state.simon.player
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    simonClick: (b) => dispatch(simonClick(b))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
