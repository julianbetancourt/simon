import React, { Component } from 'react';
import SimonButton from '../components/SimonButton';
import { connect } from 'react-redux';
import { domClick } from '../reducers/simon';
import { addToPlayerSeries, toggleOn, simonClick } from '../actions';
import { sounds } from '../reducers/simon';
import _ from 'lodash';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
  }
  componentDidUpdate() {
    // console.log(this.props.strict);
    // console.log(_.isEqual(this.props.playerSeries, []));
    // console.log(this.props.currentSeries.length > 0);
    if (this.props.strict && _.isEqual(this.props.playerSeries, []) && this.props.currentSeries.length > 0 && this.props.lost) {
      this.props.toggleOn();
      sounds.wrong.play();

    } else if (!this.props.strict && _.isEqual(this.props.playerSeries, []) && this.props.currentSeries.length > 0 && this.props.lost) {
      sounds.wrong.play();
      setTimeout(() => {
        this.props.currentSeries.forEach((c, i) => {
          setTimeout(() => {
            domClick(c)
          }, 600 * i)
        })
      }, 1000)

    } else if (this.props.playerSeries.length === 20) {
      sounds.success.play();
      this.props.toggleOn();
    } else if (this.props.playerSeries.length === this.props.currentSeries.length && this.props.currentSeries.length > 0) {
      const r = Math.floor(Math.random() * 4);
      setTimeout(() => {
        this.props.simonClick(r)
      }, 1000);

    }
  }
  handleMove(e) {
    const { playerSeries, player, addToPlayerSeries, currentSeries } = this.props;
    if (player) {
      let color = e.target.className.slice(29);
      domClick(color);
      addToPlayerSeries(color);
      // console.log(playerSeries);
      // if (playerSeries[playerSeries.length - 1] !== )
    }
  }
  render() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    return (
      <div>
        {
          colors.map(color => <SimonButton onClick={this.handleMove} color={color} key={color} />)
        }
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    currentSeries: state.simon.currentSeries,
    playerSeries: state.simon.playerSeries,
    player: state.simon.player,
    isOn: state.simon.isOn,
    strict: state.simon.strict,
    lost: state.simon.lost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToPlayerSeries: (c) => dispatch(addToPlayerSeries(c)),
    toggleOn: () => dispatch(toggleOn()),
    simonClick: (r) => dispatch(simonClick(r))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
