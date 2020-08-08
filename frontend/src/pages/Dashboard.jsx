import React, { useState } from 'react';
import Header from '../components/layout/Header';
import UserCategory from '../components/UserCategory';
import Jobs from '../components/Jobs'

function Dashboard() {
  return (
    <div>
      <Header></Header>
      <UserCategory />
      return <Jobs />
    </div>
  );
}

export default Dashboard;
