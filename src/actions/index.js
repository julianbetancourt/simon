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

export const addToCurrentSeries = () => {
  return {
    type: types.ADD_TO_CURRENT_SERIES
  }
}
