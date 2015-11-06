require('./search-rx.tag')
require('./search-list.tag')

<app>
  <search-rx value="{state.text}" actions="{opts.actions}" />
  <search-list list="{state.list}"/>

  <script type="es6">
    this.on('update', () => {
      this.state = opts.store.getState();
    });
  </script>
</app>
