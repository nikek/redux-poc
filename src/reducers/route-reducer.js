import { ROUTE } from '../action-types'

export default (state = 'overview', action) => {
  switch (action.type) {
    case ROUTE:
      if (!action.location || typeof action.location !== 'string') {
        return 'overview'
      }
      return action.location
    default:
      return state
  }
}
