import * as types from './actionTypes';
import axios from 'axios';
import customAxios from '../axios/axios';

const url = 'http://localhost:5000';

export const login = (username, password) => dispatch => {
  dispatch(loadingOn());
  dispatch(onError(null));
  axios.post(`${url}/api/login`, { username, password })
    .then(res => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => dispatch(onError(err)))
    .finally(() => dispatch(loadingOff()));
}

export const fetchFriends = () => dispatch => {
  dispatch(loadingOn());
  dispatch(onError(null));
  customAxios().get(`${url}/api/friends`)
    .then(res => {
      dispatch(getFriends(res.data))
    })
    .catch(err => dispatch(onError(err)))
    .finally(() => dispatch(loadingOff()));
}

export const deleteFriend = id => dispatch => {
  dispatch(loadingOn());
  dispatch(onError(null));
  customAxios().delete(`${url}/api/friends/${id}`)
    .then(res => {
      dispatch(getFriends(res.data))
    })
    .catch(err => dispatch(onError(err)))
    .finally(() => dispatch(loadingOff()));
}

export const addFriend = (friend) => dispatch => {
  dispatch(loadingOn());
  dispatch(onError(null));
  console.log('json stringify', JSON.stringify(friend));
  console.log('friend', friend)
  customAxios().post(`${url}/api/friends`,{
    "name": "Jack",
    "age": "1",
    "email": "jack@gmail.com"
    })
    .then(res => {
      dispatch(getFriends(res.data))
    })
    .catch(err => dispatch(onError(err)))
    .finally(() => dispatch(loadingOff()));
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

export const getFriends = (data) => {
  return ({
    type: types.GET_FRIENDS,
    payload: data
  });
}

export const onError = (data) => {
  return ({
    type: types.ON_ERROR,
    payload: data
  });
}