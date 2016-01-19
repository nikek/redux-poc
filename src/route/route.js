export const ROUTE = 'ROUTE'

const defaultRoute = {
  name: 'overview',
  path: '/'
}

export const routeReducer = (state = defaultRoute, action) => {
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
