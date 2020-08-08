import React, { useState } from 'react';
import Header from '../components/layout/Header'
import Button from 'react-bootstrap/Button';
import { apiUpdateCategory } from '../Api';
import { useSelector } from 'react-redux';

function Dashboard() {
  const user = useSelector(state => state.jesseReducer.user.user);
  const [category, setCategory] = useState(user.category);
  const [errorMessage, setErrorMessage] = useState('');


  const changeCategory = (new_category) => {
    apiUpdateCategory(user.user_id, new_category)
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
