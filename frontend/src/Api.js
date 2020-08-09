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

export function apiGetAllEmployers() {
  return axios.get('employer')
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

export function apiForgotPassword(email) {
  return axios.get(`/password/user/reset/${email}`);
}

export function apiChangePassword(oldPassword, newPassword, id) {
  return axios.post(`/password/user/change/${id}`, {
    oldPassword,
    newPassword
  })
}

export function apiGetOutstandingBalanceReport() {
  return axios.get('/admin/report/balance');
}

export function apiGetUsersForEmployerReport(employerId) {
  return axios.get(`/admin/report/employer/${employerId}`);
}