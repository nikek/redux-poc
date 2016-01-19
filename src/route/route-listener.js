import Grapnel from 'grapnel'
import store from '../store'
import { routeTo } from './route-intents'
import routeConfigs from './route-config'

const router = new Grapnel({ pushState: false })

/**
* For each item in the config this function creates a route in the Grapnel router.
*/
routeConfigs.forEach((config) => {
  router.get(config.path + (config.paramPath || ''), (req, event) => {
    routeTo(config.name, event.value || '/', req.params)
  })
})

router.get('/*', (req, e) => {
  if (!e.parent()) {
    routeTo('404', '/404')
  }
})

store.subscribe(() => {
  router.navigate(store.getState().route.path)
})

export default router
