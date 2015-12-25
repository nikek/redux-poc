export const UPDATE_LIST = 'UPDATE_LIST'
export const ADD_ITEM = 'ADD_ITEM'

export const listReducer = (state = [1.337], action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return action.list
    case ADD_ITEM:
      return state.concat([action.item])
    default:
      return state
  }
}
