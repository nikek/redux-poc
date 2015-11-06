// ACTIONS TYPES

export const AT = {
  CHANGE_INPUT_VALUE: 'CHANGE_INPUT_VALUE',
  UPDATE_LIST: 'UPDATE_LIST',

  /* ASYNC ONES */

  // _BEFORE
  // _SUCCESS
  // _FAIL
  // _AFTER

  QUERY_GITHUB_BEFORE: 'QUERY_GITHUB_BEFORE',
  QUERY_GITHUB_SUCCESS: 'QUERY_GITHUB_SUCCESS',
  QUERY_GITHUB_FAIL: 'QUERY_GITHUB_FAIL',
  QUERY_GITHUB_AFTER: 'QUERY_GITHUB_AFTER'
}



// ACTION CREATORS
export const changeInputValue = (text) => {
  return { type: AT.CHANGE_INPUT_VALUE, text }
}

export const updateList = (list) => {
  return { type: AT.UPDATE_LIST, list }
}
