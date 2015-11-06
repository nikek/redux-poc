<search-rx>
  <input name="term" value="{opts.value}" />
  <ul>
    <li each={ items }>
      <a class="result" href="{html_url}" target="_blank">
        <img src="{ owner.avatar_url }" />
        <span>{ name }</span>
      </a>
    </li>
  </ul>

  <script type="es6">
    this.items = [];

    this.on('mount', function() {
      var self = this;
      var input = this.root.querySelector('input');
      Rx.Observable.fromEvent(input, 'keyup')
        .map(e => e.target.value)
        .distinctUntilChanged()
        .debounce(200)
        //.flatMapLatest(term => {console.log(term); return source(term);})
        .subscribe(function(data) {
          opts.actions.boundChangeInputValue(data);
        });
    });

    this.on('update', () => {
      this.item = opts.value
    });
  </script>
</search-rx>
