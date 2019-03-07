import * as types from './actionTypes';
import axios from 'axios';
import customAxios from '../axios/axios';

const url = 'http://localhost:5000';

export const login = (username, password) => dispatch => {
  dispatch(loadingOn());
  axios.post(`${url}/api/login`, { username, password })
    .then(res => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.payload });
    })
    .then(dispatch(loadingOff()));
}

export const fetchFriends = () => dispatch => {
  dispatch(loadingOn());
  customAxios().get(`${url}/api/friends`)
    .then(res => {
      dispatch({ type: types.GET_FRIENDS, payload: res.data })
    })
    .then(dispatch(loadingOff()));
}

export const loadingOn = () => {
  return ({
    type: types.LOADING_ON,
  });
}

export const loadingOff = () => {
  return ({
    type: types.LOADING_OFF,
  });
}