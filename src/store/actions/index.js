import * as t from './actionTypes';
import axios from 'axios';

export function searchMovies(searchTerm) {
  return async dispatch => {
    try {
      // tell everyone we're making the request
      dispatch({ type: t.FETCH_SEARCH_REQUEST });
      // call the API for whatever our search is /{searchCat}?search={term}, auth required
      const url = `https://api.themoviedb.org/3/search/movie?api_key=030119b23a02cdf2de513ef212576e8e&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
      const search = await axios.get(url);
      console.log(search);
      const results = search.data.results;
      // dispatch the success action creator and the movies that we got back
      // fetchSearchSuccess is coming from below and it just returns an action with your async api call results
      // dispatch comes from redux, comes from store
      dispatch(fetchSearchSuccess(results));
    } catch (error) {
      dispatch(fetchSearchFail(error));
      return Promise.reject();
    }
  };
}

export function fetchSearchSuccess(search) {
  return { type: t.FETCH_SEARCH_SUCCESS, search };
}

export function fetchSearchFail(error) {
  return { type: t.FETCH_SEARCH_FAIL, error };
}
