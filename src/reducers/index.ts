import { combineReducers } from 'redux';
import bookReducer from './bookReducer.ts';

const rootReducer = combineReducers({
  books: bookReducer,
});

export default rootReducer;
