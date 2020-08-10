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
export function apiGetAllApplications() {
  return axios.get(`/application`)
}

export function apiGetUser(userId) {
  return axios.get(`/user/${userId}`)
}

export function apiGetJobById(jobId) {
  return axios.get(`/job/${jobId}`);
}

export function apiUpdateCategory(userId, category) {
  return axios.put(`/user/${userId}/category`, {
    category: category
  })
}

export function apiGetAllJobsByUser(userId) {
  return axios.get(`/job/user/${userId}`)
}

export function apiUpdateUser(userId, toUpdate) {
  return axios.put(`/user/${userId}`, toUpdate)
}

export function apiSignUp(email, password, fname, lname, role) {
  return axios.post('signup', {
    email,
    password,
    fname,
    lname,
    role,
  })
}

export function apiDeleteUser(userId) {
  return axios.delete(`/user/${userId}`)
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

export function apiDeleteApplication(application_id) {
  return axios.delete(`/application/${application_id}`);
}

export function apiApply(application_status, user_id, employer_id, job_id) {
  return axios.post('application', {
    status: application_status,
    user_id_fk: user_id,
    employer_id_fk: employer_id,
    job_id_fk: job_id,

  })
}

export function apiAddCreditCard(creditCard) {
  return axios.post('/creditcard', creditCard)
}

export function apiAddCheckingAccount(checkingAccount) {
  return axios.post('/checkingAccount', checkingAccount)
}

export function apigetCreditCardByUserId(user_id) {
  return axios.get(`/creditCard/user/${user_id}`);
}

export function apiDeleteCreditCard(creditCard_id) {
  return axios.delete(`/creditCard/${creditCard_id}`);
}

export function apiGetCheckingAccountsByUserId(user_id) {
  return axios.get(`checkingAccount/user/${user_id}`);
}

export function apiDeleteCheckingAccount(checkingAccount_id) {
  return axios.delete(`checkingAccount/${checkingAccount_id}`);
}

export function apiPostJob(title, description, category, employer_id_fk) {
  return axios.post('/job', {
    title,
    description,
    category,
    employer_id_fk
  });
}

export function apiGetLogs() {
  return axios.get(`logs`);
}

export function apiGetEmployerById(employer_id) {
  return axios.get(`/employer/${employer_id}`);
}

export function apiUpdateJob(title, description, category, id) {
  return axios.put('/job/' + id, {
    title,
    description,
    category
  })
}

export function apiGetSummary() {
  return axios.get('/summary');
}
