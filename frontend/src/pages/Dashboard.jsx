import React, { useState } from 'react';
import Header from '../components/layout/Header'
import Button from 'react-bootstrap/Button';
import { apiUpdateUser } from '../Api';
import { useSelector } from 'react-redux';

function Dashboard() {
  // const [user_id, fname, lname, email, balance, date_last_payment, withdrawal_status] = props;
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector(state => state.jesseReducer.user.user);

  const changeCategory = (new_category) => {
    apiUpdateUser(user.user_id, user.fname, user.lname, new_category, user.email, user.balance, user.date_last_payment, user.withdrawal_status)

      .then((response) => {
        if (response.data.success) {
          //   history.push("/dashboard");
          console.log('nice');
        } else {
          setErrorMessage(response.data.message);
        }
      }).catch((error) => {
        setErrorMessage(error.message);
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response);
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <Button onClick={() => changeCategory('Basic')} disabled={category == 'Basic'}>Basic</Button>
      <Button onClick={() => changeCategory('Prime')} disabled={category == 'Prime'}>Prime</Button>
      <Button onClick={() => changeCategory('Gold')} disabled={category == 'Gold'}>Gold</Button>
    </div>
  );
}

export default Dashboard;
