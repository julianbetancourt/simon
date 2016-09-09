import initialState from './initialState';
import * as types from '../actions/actionTypes';
import domClick from '../utils/domClick';

const colors = ['red', 'green', 'blue', 'yellow'];


const simon = (state = initialState.simon, action) => {
  switch (action.type) {
    case types.TOGGLE_ON:
      return Object.assign({}, state, {
        isOn: !state.isOn,
        currentSeries: [],
        playerSeries: [ ],
        player: false,
        lost: false
      })
    case types.TOGGLE_STRICT:
      return Object.assign({}, state, {
        strict: !state.strict
      })
    case types.SIMON_CLICK:
      let currentSeries = state.currentSeries.slice(0);
      currentSeries.push(colors[action.button]);
      currentSeries.forEach((c, i) => {
        setTimeout(() => {
          domClick(c)
        }, 700 * i)
      })
      return Object.assign({}, state, {
        currentSeries,
        playerSeries: [],
        player: true,
        lost: false
      });
    case types.ADD_TO_PLAYER_SERIES:
      let newSeries = state.playerSeries.slice(0);
      newSeries[newSeries.length] = action.color;
      if (state.currentSeries[newSeries.length - 1] !== newSeries[newSeries.length - 1]) {

        return Object.assign({}, state, {
          playerSeries: [],
          lost: true,
        })

      } else {
        return Object.assign({}, state, {
          playerSeries: [...state.playerSeries, action.color],
          lost: false
        })
      }


    default:
      return state;
  }
}


export default simon;
