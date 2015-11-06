import 'rx'
import 'riot'
import {createStore} from 'redux'

import './tags/app.tag'
import {changeInputValue, updateList} from './actions/app-actions.js'
import {mainReducer} from './reducers/app-reducer.js'


// INIT STATE
const initState = {
  text: 'hej',
  history: []
}

// STORE
const store = createStore(mainReducer, initState)


// BOUND ACTION CREATOR
const actions = {
  boundChangeInputValue: (text) => {
    console.log("dispatching")
    store.dispatch(changeInputValue(text))

    // debounce this instead of fromEvent observable in search-rx
    source(text).subscribe((data) => {
      console.log(data);
      store.dispatch(updateList(data))
    })
  }
}

const source = (term) => {
  return Rx.Observable.create(function (observer) {
    fetch(`https://api.github.com/search/repositories?q=${term}`)
      .then(res => res.json())
      .then(j => {
        observer.onNext(j.items)
        observer.onCompleted()
      })
  });
};

const app = riot.mount('app', {store, actions})[0];

store.subscribe(() => {
  app.update();
})

setTimeout(() => {actions.boundChangeInputValue('medielogo')}, 1000)
