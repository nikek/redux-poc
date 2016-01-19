import store from '../store'

// Written with riot.tag as the compiler can't handle just a string as inner html
riot.tag('title', '{title}', function(opts){

  // Fetch the title from the store and update component
  const render = () => {
    this.title = store.getState().route.name
    this.update()
  }

  // Rerender on new store
  store.subscribe(render)

  // Init
  render()
})
