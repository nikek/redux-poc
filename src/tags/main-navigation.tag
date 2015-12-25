<main-navigation>
  <h1>Logo</h1>
  <nav>
    <a each="{ routes }" href="{ href }" onclick="{ route }" class="{ disabled: current === name }">{ name }</a>
  </nav>

  <script>
    import { routeTo } from '../route/route-intents'
    import store from '../store'

    this.routes = [
      { name: 'overview', href: '/overview' },
      { name: 'list', href: '/list' }
    ]

    this.route = (e) => {
      // extract location from anchor tag
      let loc = e.target.pathname.split('/')[1]

      if(this.current !== loc)
        routeTo(loc);
    }

    this.on('update', () => {
      this.current = store.getState().route;
    })
  </script>
</main-navigation>
