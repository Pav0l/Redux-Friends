import * as types from './actionTypes';

export default function logToken(token='', action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        token: action.payload
      };
  
    default:
      return token;
  }
}
