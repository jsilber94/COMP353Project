import axios from 'axios';
import React from 'react';
import './App.css';
import { apiURL } from './config/env';
import Login from './components/Login';
import Header from './components/header'

function App() {
  axios.defaults.baseURL = apiURL;

  return (
    <div className="App">
      <Header user="alex"/>
      <Login />
    </div>
  );
}

export default App;
