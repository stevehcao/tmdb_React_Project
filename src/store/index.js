import rootReducer from '../store/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      // thunk allows you to use async with redux
      // a thunk is a function that returns a function
      applyMiddleware(thunk),
      // take out dev tools in production
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}
