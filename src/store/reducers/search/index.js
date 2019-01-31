import * as t from '../../actions/actionTypes';

const DEFAULT_STATE = { results: [], error: false, isLoading: true };
// changed to an object
// will be an array of objects, can also depends on what you are building
// reducer always have 2 parameters, (state, action)
// always a switch statement
export default function searchReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case t.FETCH_SEARCH_SUCCESS: {
      // returing what you want state to look like
      return { results: action.search, error: false, isLoading: false };
    }
    case t.FETCH_SEARCH_FAIL: {
      return { results: [], error: true, isLoading: false };
    }
    default:
      return state;
  }
}
