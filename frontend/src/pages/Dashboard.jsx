import React, { useState } from 'react';
import Header from '../components/layout/Header'
import Button from 'react-bootstrap/Button';
import { apiUpdateUser } from '../Api';

function Dashboard(props) {


    // const [user_id, fname, lname, email, balance, date_last_payment, withdrawal_status] = props;
    const [category, setCategory] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const changeType = () => {
        console.log(props);
        // apiUpdateUser(user_id, fname, lname, category, email, balance, date_last_payment, withdrawal_status)
        apiUpdateUser(category)
          .then((response) => {
            if (response.data.success) {
            //   history.push("/dashboard");
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
            <Button onClick={() => setCategory('Basic'), changeType} disabled={category == 'Basic'}>Basic</Button>
            <Button onClick={() => setCategory('Prime'), changeType} disabled={category == 'Prime'}>Prime</Button>
            <Button onClick={() => setCategory('Gold'), changeType} disabled={category == 'Gold'}>Gold</Button>
        </div>
    );
}

export default Dashboard;
