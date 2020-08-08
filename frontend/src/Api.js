import axios from 'axios';

export function apiLogin(email, password) {
  return axios.post('login', {
    email,
    password,
  });
}

export function apiGetAllJobs() {
  return axios.get('job')
}

export function apiSignUp(email, password, fname, lname) {
  return axios.post('signup', {
    email,
    password,
    fname,
    lname,
  })
}

export function apiUpdateUser(userId, fname, lname, category, email, balance, date_last_payment, withdrawal_status) {
  return axios.put(`user/${userId}`, {
    fname,
    lname,
    category,
    email,
    balance,
    date_last_payment,
    withdrawal_status,
  })
}
