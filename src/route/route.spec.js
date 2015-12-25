import expect from 'expect'
import { ROUTE, routeReducer } from './route'

let createReducerTester = (reducer) => {
  return (currentState, newState, action) => {
    expect(reducer(currentState, action)).toEqual(newState)
  }
}

let testRoute = createReducerTester(routeReducer)

// Different input states
testRoute('foo',      'awesomeView', { type: ROUTE, location: 'awesomeView' })
testRoute('overview', 'awesomeView', { type: ROUTE, location: 'awesomeView' })
testRoute('',         'awesomeView', { type: ROUTE, location: 'awesomeView' })
testRoute(undefined,  'awesomeView', { type: ROUTE, location: 'awesomeView' })

// Falsy location
testRoute('foo', 'overview', { type: ROUTE, location: '' })
testRoute('foo', 'overview', { type: ROUTE, location: null })
testRoute('foo', 'overview', { type: ROUTE, location: undefined })
testRoute('foo', 'overview', { type: ROUTE })

// Type error
testRoute('foo', 'overview', { type: ROUTE, location: 7 })
testRoute('foo', 'overview', { type: ROUTE, location: {} })
testRoute('foo', 'overview', { type: ROUTE, location: [] })
testRoute('foo', 'overview', { type: ROUTE, location: NaN })
