import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { apiURL } from './config/env';
import Hello from './components/Hello';
import Login from './components/Login';

function App() {
  axios.defaults.baseURL = apiURL;
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <div className="App">
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
