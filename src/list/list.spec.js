import expect from 'expect'
import { UPDATE_LIST, ADD_ITEM, listReducer } from './list'

// Update list
expect(
  listReducer([], { type: UPDATE_LIST, list: ['stuff'] })
).toEqual(
  ['stuff']
)

// Add item
expect(
  listReducer(['bla'], { type: ADD_ITEM, item: 'hejsan' })
).toEqual(
  ['bla', 'hejsan']
)
