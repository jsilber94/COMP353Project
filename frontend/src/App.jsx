import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import {  deployedUrl } from './config/env';
import Hello from './components/Hello';
import Login from './components/Login';
import JobTable from './components/Jobs'

function App() {
  axios.defaults.baseURL = deployedUrl;
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <div className="App">
      <JobTable />
      <Router>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <Redirect to="/test" /> : <Login setLogin={setLogin} />}
          </Route>
          <Route path="/test">
            <Hello />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
