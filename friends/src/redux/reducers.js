import * as types from './actionTypes';

export default function friends(friends=[], action) {
  switch (action.type) {
    case types.GET_FRIENDS:
      return action.payload;
  
    default:
      return friends;
  }
}
