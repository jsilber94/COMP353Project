import React, { useState } from 'react';
import Header from '../components/layout/Header'
import Button from 'react-bootstrap/Button';
import { apiUpdateCategory, apiUpdateUser } from '../Api';
import { useSelector } from 'react-redux';

function Dashboard() {
  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const user = useSelector(state => state.jesseReducer.user.user);

  const changeCategory = (new_category) => {
    apiUpdateUser(user.user_id, user.fname, user.lname, new_category, user.email, user.balance, user.date_last_payment.substring(0, 10), user.withdrawal_status)
      .then((response) => {
        console.log(response);
        if (response.statusText == "OK") {
          setCategory(new_category);
        } else {
          setErrorMessage(response.data.message);
        }
      }).catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
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
