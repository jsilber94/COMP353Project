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

export function apiGetUser(userId){
  return axios.get(`/user/${userId}`)
}

export function apiUpdateCategory(userId, category) {
  return axios.put(`/user/${userId}/category`, {
    category: category
  })
}

export function apiUpdateUser(userId, user){
  return axios.put(`/user/${userId}`, user)
}

export function apiSignUp(email, password, fname, lname) {
  return axios.post('signup', {
    email,
    password,
    fname,
    lname,
  })
}

export function apiForgotPassword(email) {
  return axios.get('/password/user/reset/' + email);
}

export function apiChangePassword(oldPassword, newPassword, id) {
  return axios.post('/password/user/change/' + id, {
    oldPassword,
    newPassword
  })
}
