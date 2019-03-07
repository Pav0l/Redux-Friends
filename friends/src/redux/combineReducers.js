import { combineReducers } from 'redux';
import { friends, loading } from './reducers';

const rootReducer = combineReducers({
  friends,
  loading,
});

export default rootReducer;