import { combineReducers } from 'redux'
import { route } from './route-reducer'
import { list } from './list-reducer'

export const rootReducer = combineReducers({
  route,
  list
})
