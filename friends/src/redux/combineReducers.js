import { combineReducers } from 'redux';
import { friends, loading, error } from './reducers';

const rootReducer = combineReducers({
  friends,
  loading,
  error,
});

export default rootReducer;