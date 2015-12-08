import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { rootReducer } from './reducers/root-reducer'

// INIT STATE
const initState = {
  list: [1.337, 5.4321],
  route: 'overview'
}

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware
)(createStore)

// STORE
const store = createStoreWithMiddleware(rootReducer, initState)

export default store
