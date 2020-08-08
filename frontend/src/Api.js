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

export function apiApply(appication_status, user_id, employer_id, job_id) {
  return axios.post('application', {
   status: appication_status,
   user_id_fk: user_id,
   employer_id_fk: employer_id,
   job_id_fk: job_id,

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
  return axios.get('/password/user/reset/' + email);
}

export function apiChangePassword(oldPassword, newPassword, id) {
  return axios.post('/password/user/change/' + id, {
    oldPassword,
    newPassword
  })
}
