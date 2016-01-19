import store from '../store'
import { ROUTE } from './route'

export const routeTo = (name, path, params) => {
  // If new path is equal to previous path, don't dispatch routing action
  if (path === store.getState().route.path)
    return;

  store.dispatch({ type: ROUTE, route: { name, path, params } })
}
