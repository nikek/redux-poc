import { UPDATE_LIST, ADD_ITEM } from '../action-types'

export const list = (state = [], action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return action.list
    case ADD_ITEM:
      return state.concat([action.item])
    default:
      return state;
  }
}
