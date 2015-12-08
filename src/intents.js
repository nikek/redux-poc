import * as AT from './action-types'
import store from './store'

export const routeTo = (location) => {
  store.dispatch({ type: AT.ROUTE, location })
}

export const updateList = (list) => {
  store.dispatch({ type: AT.UPDATE_LIST, list })
}

export const addItem = (item) => {
  store.dispatch({ type: AT.ADD_ITEM, item })
}
