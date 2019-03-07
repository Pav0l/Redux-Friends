import * as types from './actionTypes';
import axios from 'axios';
import customAxios from '../axios/axios';

const url = 'http://localhost:5000';

export const login = (username, password) => dispatch => {
  axios.post(`${url}/api/login`, { username, password })
    .then(res => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.payload });
    });
}

export const fetchFriends = () => dispatch => {
  customAxios().get(`${url}/api/friends`)
    .then(res => {
      console.log(res);
      dispatch({ type: types.GET_FRIENDS, payload: res.data })
    })
}
