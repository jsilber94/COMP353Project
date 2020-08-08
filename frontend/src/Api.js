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

export function apiGetAllUsers() {
  return axios.get('user')
}

export function apiUpdateCategory(userId, category) {
  return axios.put(`/user/${userId}/category`, {
    category: category
  })
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

export function apiForgotPassword(email) {
  return axios.get('/password/user/reset/' + email);
}
