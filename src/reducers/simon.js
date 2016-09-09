import initialState from './initialState';
import * as types from '../actions/actionTypes';

const colors = ['red', 'green', 'blue', 'yellow'];
export const sounds = {
  red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
  green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
  blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
  yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
  wrong: new Audio('http://www.soundjay.com/misc/fail-buzzer-04.mp3'),
  success: new Audio('http://soundbible.com/grab.php?id=1003&type=mp3')
};

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
        }, 600 * i)
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
        // console.log(state.playerSeries);
        // console.log(state.strict);
        return Object.assign({}, state, {
          playerSeries: [],
          lost: true
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

export const domClick = (color) => {


  let element = document.querySelector('.simon__button--'+color);
  element.classList.add('is-active');

  let clickID = setTimeout(() => {
    element.classList.remove('is-active');
    sounds[color].play();
    clearTimeout(clickID);
  }, 100);

}

export default simon;
