import React, { Component } from 'react';
import { connect } from 'react-redux';

class Count extends Component {
  render() {
    const { count } = this.props
    return (
      <div className="simon__settings__count">
        <span>{count.length < 10 ? `0${count.length}` : count.length}</span>
        <span>Count</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.simon.currentSeries
  }
}

export default connect(mapStateToProps)(Count);
