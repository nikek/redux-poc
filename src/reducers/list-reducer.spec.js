import expect from 'expect'
import { UPDATE_LIST, ADD_ITEM } from '../action-types'
import list from './list-reducer'

// Update list
expect(
  list([], { type: UPDATE_LIST, list: ['stuff'] })
).toEqual(
  ['stuff']
)

// Add item
expect(
  list(['bla'], { type: ADD_ITEM, item: 'hejsan' })
).toEqual(
  ['bla', 'hejsan']
)
