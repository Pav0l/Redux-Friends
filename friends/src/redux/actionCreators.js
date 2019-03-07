import * as types from './actionTypes';
import axios from 'axios';

export const login = (username, password) => dispatch => {
  axios.post('http://localhost:5000/api/login', { username, password })
    .then(res => {
      console.log(res);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.payload });
    });
}
