import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Jobs from '../components/Jobs';

function Dashboard() {
  return (
    <div>
      <Header></Header>
      <Jobs />
    </div>
  );
}

export default Dashboard;
