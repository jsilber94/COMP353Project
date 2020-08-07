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

//these are all the fields necessary for the put
export function apiUpdateUser(user_id, fname, lname, category, email, balance, date_last_payment, withdrawal_status) {
  return axios.patch('user/id:', {
    user_id,
    fname,
    lname,
    email,
    balance,
    date_last_payment,
    withdrawal_status,
  })
}

export function apiUpdateUser(user_id, fname, lname, category, email, balance, date_last_payment, withdrawal_status) {
  return axios.put('user/id:', {
    user_id,
    fname,
    lname,
    category,
    email,
    balance,
    date_last_payment,
    withdrawal_status,
  })
}
