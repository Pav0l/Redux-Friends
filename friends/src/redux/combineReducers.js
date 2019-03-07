import { combineReducers } from 'redux';
import friends from './reducers';

const rootReducer = combineReducers({
  friends,
});

export default rootReducer;