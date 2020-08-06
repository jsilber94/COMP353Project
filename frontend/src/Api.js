import axios from 'axios';

export function apiLogin(email, password) {
  return axios.post('login', {
    email,
    password,
  });
}


export function apiGetAllJobs(){
  return axios.get('job')
}
