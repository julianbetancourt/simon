import React, { Component } from 'react';
import SimonButton from '../components/SimonButton';
import { connect } from 'react-redux';
import { domClick } from '../reducers/simon';
import { addToPlayerSeries, toggleOn, simonClick } from '../actions';
import { sounds } from '../reducers/simon';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
  }
  componentDidUpdate() {
    if (this.props.playerSeries === 'lost') {
      sounds.wrong.play();
      this.props.toggleOn();
    } else if (this.props.playerSeries.length === 5) {
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
    isOn: state.simon.isOn
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
