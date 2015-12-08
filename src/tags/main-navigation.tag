import { routeTo } from '../intents'

<main-navigation>
  <h1>Logo</h1>
  <nav>
    <a href="/overview" onclick="{ route }">overview</a>
    <a href="/list" onclick="{ route }">list</a>
  </nav>

  <script>
    this.route = (e) => {
      // extract location from anchor tag
      let loc = e.target.pathname.split('/')[1];

      routeTo(loc);
    }
  </script>
</main-navigation>
