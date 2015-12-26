<main-navigation>
  <h1>Logo</h1>
  <nav>
    <a each="{ routes }" href="{ path }" onclick="{ navigate }">{ name }</a>
  </nav>

  <script>
    import router from '../route/route-listener'
    import routes from '../route/route-config'
    import store from '../store'

    this.routes = routes;

    this.navigate = (e) => {
      router.navigate(e.item.path);
    }

    this.on('update', () => {
      this.current = store.getState().route.name;
    })
  </script>
</main-navigation>
