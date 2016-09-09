import * as types from './actionTypes';

export const toggleOn = () => {
  return {
    type: types.TOGGLE_ON
  }
}

export const toggleStrict = () => {
  return {
    type: types.TOGGLE_STRICT
  }
}

export const simonClick = (button) => {
  return {
    type: types.SIMON_CLICK,
    button
  }
}

export const addToPlayerSeries = (color) => {
  return {
    type: types.ADD_TO_PLAYER_SERIES,
    color
  }
}

export const playerClick = (button) => {
  return {
    type: types.PLAYER_CLICK,
    button
  }
}
