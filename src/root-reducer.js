import { combineReducers } from 'redux'
import { listReducer as list } from './list/list'
import { routeReducer as route } from './route/route'


export default combineReducers({ list, route })

/**
combineReducers creates something like:

(state, action) => {
  return {
    route: route(state.route, action),
    list: list(state.list, action)
  }
}
*/
