import * as types from './actionTypes';

export const customLoginMiddleware = store => next => action => {
  if (action.type === types.LOGIN_SUCCESS) {
    localStorage.setItem('userToken', action.payload);
  }
  next(action);
}

export default customLoginMiddleware;