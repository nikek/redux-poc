import { combineReducers } from 'redux'
import route from './route-reducer'
import list from './list-reducer'

export default combineReducers({ route, list })

/**
combineReducers creates something like:

(state, action) => {
  return {
    route: route(state.route, action),
    list: list(state.list, action)
  }
}

*/
