import './main-navigation.tag'
import './list-view.tag'
import './overview-view.tag'
import * as store from '../store.js'

<app>
  <main-navigation current="{route}"></main-navigation>

  <overview-view if="{route === 'overview'}"></overview-view>
  <list-view if="{route === 'list'}" list="{list}"></list-view>

  <script type="es6">
    store.subscribe(() => {
      this.update()
    })

    this.on('update', () => {
      this.route = store.getState().route
      this.list = store.getState().list
    })
  </script>
</app>
