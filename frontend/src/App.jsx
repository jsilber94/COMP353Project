import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import { NavLink } from 'react-bootstrap';
import { apiURL } from './config/env';

import Login from './components/Login';
// import JobTable from './components/Jobs';
import SignUp from './components/SignUp';

function App() {
  axios.defaults.baseURL = apiURL;
  const [isLoggedIn, setLogin] = useState(false);
  const [isSignedUp, setSignUp] = useState(false);

  return (
    <div>

      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              {isLoggedIn ? <Redirect to="/test" /> : <Login setLogin={setLogin} />}

              <span className="input-group-btn">
                <NavLink to="/signup" href="/signup">
                  Sign Up
                </NavLink>
              </span>
            </Route>

            <Route exact path="/signup">
            {isSignedUp ? <Redirect to="/test" /> :  <SignUp setSignUp={setSignUp} />}
            </Route>

            <Route path="/test" />

          </Switch>

        </Router>
      </div>

    </div>
  );
}

export default App;
