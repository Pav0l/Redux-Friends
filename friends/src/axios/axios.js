import axios from 'axios';

export default function () {
  const token = localStorage.getItem('userToken');

  const instance = axios.create({
    headers: {
      'Content-Type': 'text',
      Authorization: token,
    },
  });

  return instance;
}
