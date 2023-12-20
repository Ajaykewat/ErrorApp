// rootReducer.js
import { combineReducers } from 'redux';
import errorReducer from './errorReducer';


const rootReducer = combineReducers({
  // other reducers
  error: errorReducer,
});

export default rootReducer;
