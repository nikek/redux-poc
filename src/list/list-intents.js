import store from '../store'
import { UPDATE_LIST, ADD_ITEM } from './list'

export const updateList = (list) => {
  store.dispatch({ type: UPDATE_LIST, list })
}

export const addItem = (item) => {
  store.dispatch({ type: ADD_ITEM, item })
}
