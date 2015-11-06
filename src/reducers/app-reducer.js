import {AT} from '../actions/app-actions'

// REDUCER
export function mainReducer(state, action) {
  switch (action.type) {
    case AT.CHANGE_INPUT_VALUE:
      return Object.assign({}, state, {text: action.text});
    case AT.UPDATE_LIST:
      return Object.assign({}, state, {list: action.list});
    default:
      return state;
  }
}
