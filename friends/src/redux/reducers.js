import * as types from './actionTypes';

export function friends(friends=[], action) {
  switch (action.type) {
    case types.GET_FRIENDS:
      return action.payload;

    case types.DELETE_FRIEND:
      return action.payload;

    case types.ADD_FRIEND:
      return action.payload;
  
    default:
      return friends;
  }
}

export function loading(loading=false, action) {
  switch (action.type) {
    case types.LOADING_ON:
      return true;

    case types.LOADING_OFF:
      return false;
  
    default:
      return loading;
  }
}

export function error(error=null, action) {
  switch (action.type) {
    case types.ON_ERROR:
      return action.payload;
 
    default:
      return error;
  }
}
