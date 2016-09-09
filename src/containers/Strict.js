import React, { Component } from 'react';
import SettingsButton from '../components/SettingsButton';
import { connect } from 'react-redux';
import { toggleStrict } from '../actions';

class Strict extends Component {

  render() {
    return <SettingsButton
      type="strict"
      isStrict={this.props.isStrict}
      onClick={() => this.props.toggleStrict()}/>
  }
}

const mapStateToProps = (state) => {
  return {
    isStrict: state.simon.strict
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleStrict: () => dispatch(toggleStrict())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Strict);
