import React, { useState } from 'react';
import Header from '../components/layout/Header'
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';

function Dashboard() {
  const user = useSelector(state => state.jesseReducer.user.user);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div>
      <Header></Header>
      <UserProfile />
    </div>
  );
}

export default Dashboard;
