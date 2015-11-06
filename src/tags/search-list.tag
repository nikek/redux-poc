<search-list>
  <ul>
    <li each={ opts.list }><a href="{ html_url }">{ name }</a></li>
  </ul>

  <script type="es6">
    this.items = ['hej'];

    this.on('mount', function() {
      this.items.push({html_url: 'bla'});
      this.update();
    }.bind(this));
  </script>
</search-list>
