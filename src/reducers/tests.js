import expect from 'expect'
import { ROUTE, UPDATE_LIST, ADD_ITEM } from '../action-types';
import { rootReducer } from './root-reducer'
import { route } from './route-reducer'
import { list } from './list-reducer'


// ROOT REDUCER STILL WORKS
expect(
  rootReducer({ route: 'overview', list: [] }, { type: UPDATE_LIST, list: ['elem'] })
).toEqual(
  { route: 'overview', list: ['elem'] }
);


// ROUTE REDUCER
// Set new route
expect(
  route('hej', { type: ROUTE, location: 'overview' })
).toEqual(
  'overview'
);


// LIST REDUCER
// Update list
expect(
  list([], { type: UPDATE_LIST, list: ['stuff'] })
).toEqual(
  ['stuff']
);

// LIST REDUCER
// Add item
expect(
  list(['bla'], { type: ADD_ITEM, item: 'hejsan' })
).toEqual(
  ['bla','hejsan']
);
