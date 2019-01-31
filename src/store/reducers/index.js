import { combineReducers } from 'redux';
import search from './search';

// combineReducers is from redux makes your page more modular
const rootReducer = combineReducers({
  search
});

export default rootReducer;
