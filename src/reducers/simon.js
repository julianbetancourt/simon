import initialState from './initialState';
import * as types from '../actions/actionTypes';

const colors = ['red', 'green', 'blue', 'yellow'];


const simon = (state = initialState.simon, action) => {
  switch (action.type) {
    case types.TOGGLE_ON:
      return Object.assign({}, state, {
        isOn: !state.isOn
      })
    case types.TOGGLE_STRICT:
      return Object.assign({}, state, {
        strict: !state.strict
      })
    case types.ADD_TO_CURRENT_SERIES:
      const random = Math.floor(Math.random() * (4 - 0) + 0);
      let currentSeries = state.currentSeries.slice(0);
      currentSeries.push(colors[random]);
      return Object.assign({}, state, {
        currentSeries,
        playerSeries: []
      });
    default:
      return state;
  }
}

export default simon;
