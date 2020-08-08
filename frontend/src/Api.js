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

export function apiUpdateUser(id, fname, lname, category, email, balance, date_last_payment, withdrawal_status) {
  console.log(typeof id);
  console.log(typeof fname);
  console.log(typeof lname);
  console.log(typeof category);
  console.log(typeof email);
  console.log(typeof balance);
  console.log(typeof date_last_payment);
  console.log(typeof withdrawal_status);

  return axios.put('user/:id', {
    id,
    fname,
    lname,
    category,
    email,
    balance,
    date_last_payment,
    withdrawal_status,
  })
}
