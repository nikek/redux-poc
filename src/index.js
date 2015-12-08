import 'riot'
import './tags/app.tag'
import './tests';

riot.mount('app')


//
// // BOUND ACTION CREATOR
// const actions = {
//   boundChangeInputValue: (text) => {
//     console.log("dispatching")
//     store.dispatch(changeInputValue(text))
//
//     // debounce this instead of fromEvent observable in search-rx
//     source(text).subscribe((data) => {
//       console.log(data);
//       store.dispatch(updateList(data))
//     })
//   }
// }
//
// const source = (term) => {
//   return Rx.Observable.create(function (observer) {
//     fetch(`https://api.github.com/search/repositories?q=${term}`)
//       .then(res => res.json())
//       .then(j => {
//         observer.onNext(j.items)
//         observer.onCompleted()
//       })
//   });
// };
