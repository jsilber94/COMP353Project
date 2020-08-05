import axios from 'axios';

export function apiLogin(email, password) {
  return axios.post('login', {
    email,
    password,
  });
}
