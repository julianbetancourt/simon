import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleOn } from '../actions';

class On extends Component {
  render() {
    const { isOn, toggleOn } = this.props;
    return (
      <div
        className={isOn ? 'simon__settings__toggle is-on' : 'simon__settings__toggle is-off'}
        onClick={() => toggleOn()}>
        <span className="indicator"></span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOn: state.simon.isOn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   toggleOn: () => dispatch(toggleOn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(On);
