import expect from 'expect'
import { ROUTE, routeReducer } from './route'

const createReducerTester = (reducer) => {
  return (currentState, newState, action) => {
    expect(reducer(currentState, action)).toEqual(newState)
  }
}

const testRoute = createReducerTester(routeReducer)

// Different input states
testRoute(
  { name: 'foo', path: '', params: undefined },
  { name: 'awesomeView', path: '', params: undefined},
  { type: ROUTE, route: { name: 'awesomeView', path: '', params: undefined }}
)
testRoute(
  { name: 'overview', path: '', params: undefined },
  { name: 'awesomeView', path: '', params: undefined },
  { type: ROUTE, route: { name: 'awesomeView', path: '', params: undefined }}
)
testRoute(
  { name: '', path: '', params: undefined },
  { name: 'awesomeView', path: '', params: undefined },
  { type: ROUTE, route: { name: 'awesomeView', path: '', params: undefined }}
)
testRoute(
  { name: undefined, path: '', params: undefined },
  { name: 'awesomeView', path: '', params: undefined },
  { type: ROUTE, route: { name: 'awesomeView', path: '', params: undefined }}
)

// Falsy location
testRoute(
  { name: 'foo', path: '', params: undefined },
  { name: 'foo', path: '', params: undefined },
  { type: ROUTE, route: { name: '', path: '', params: undefined }}
)
testRoute(
  { name: 'foo', path: '', params: undefined },
  { name: 'foo', path: '', params: undefined },
  { type: ROUTE, route: { name: null, path: '', params: undefined }}
)
testRoute(
  { name: 'foo', path: '', params: undefined },
  { name: 'foo', path: '', params: undefined },
  { type: ROUTE, route: { name: undefined, path: '', params: undefined }}
)
testRoute(
  { name: 'foo', path: '', params: undefined },
  { name: 'foo', path: '', params: undefined },
  { type: ROUTE }
)

// Type error
testRoute(
  { name: 'foo', path: '', params: undefined },
  { name: 'foo', path: '', params: undefined },
  { type: ROUTE, route: { name: 7, path: '', params: undefined }}
)
testRoute(
  { name: 'foo', path: '', params: undefined },
  { name: 'foo', path: '', params: undefined },
  { type: ROUTE, route: { name: {}, path: '', params: undefined }}
)
testRoute(
  { name: 'foo', path: '', params: undefined },
  { name: 'foo', path: '', params: undefined },
  { type: ROUTE, route: { name: [], path: '', params: undefined }}
)
testRoute(
  { name: 'foo', path: '', params: undefined },
  { name: 'foo', path: '', params: undefined },
  { type: ROUTE, route: { name: NaN, path: '', params: undefined }}
)
