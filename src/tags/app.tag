import './main-navigation.tag'
import './list-view.tag'
import './overview-view.tag'

<app>
  <main-navigation></main-navigation>

  <overview-view if="{route.name === 'overview'}"></overview-view>
  <list-view if="{route.name === 'list'}" list="{list}"></list-view>

  <script type="es6">
    import store from '../store.js'

    store.subscribe(this.update)

    this.on('update', () => {
      Object.assign(this, store.getState())
    })
  </script>
</app>
