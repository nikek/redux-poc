import { ROUTE } from '../action-types'

export const route = (state = 'overview', action) => {
  switch (action.type) {
    case ROUTE:
      if (!action.location)
        return 'overview'
      return action.location
    default:
      return state;
  }
}
