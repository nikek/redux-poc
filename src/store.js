import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './root-reducer'

// Logger middleware
const loggerMiddleware = createLogger()

// Create store creator with middleware function
const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore)

// Create store, init state is defined by respective sub reducer
export default createStoreWithMiddleware(rootReducer)
