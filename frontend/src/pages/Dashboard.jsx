import React, { useState } from 'react';
import Header from '../components/layout/Header';
import UserCategory from '../components/UserCategory';

function Dashboard() {
  return (
    <div>
      <Header></Header>
      <UserCategory />
    </div>
  );
}

export default Dashboard;
