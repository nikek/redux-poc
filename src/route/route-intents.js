import store from '../store'
import { ROUTE } from './route'

export const routeTo = (name, path, params) => {
  store.dispatch({ type: ROUTE, route: { name, path, params } })
}
