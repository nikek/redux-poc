import store from '../store'
import { ROUTE } from './route'

export const routeTo = (location) => {
  store.dispatch({ type: ROUTE, location })
}
