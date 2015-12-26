export const ROUTE = 'ROUTE'

export const routeReducer = (state = { name: 'overview', path: '/' }, action) => {
  switch (action.type) {
    case ROUTE:
      if (action.route && action.route.name && typeof action.route.name === 'string') {
        return action.route
      }
      return state
    default:
      return state
  }
}
