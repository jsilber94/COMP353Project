import React, { useState } from 'react';
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { apiLogin } from '../../Api';
import { loginRedux } from '../../store/action/auth';

// eslint-disable-next-line react/prop-types
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const authenticate = () => {
    apiLogin(email, password)
      .then((response) => {
        if (response.data.success) {
          dispatch(loginRedux(response.data.user.role, response.data.user.user_id));
          history.push("/dashboard");
        } else {
          setErrorMessage(response.data.message);
        }
      }).catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  };

  const navigateToSignUp = () => {
    history.push("/signup")
  }

  const navigateToForgotPassword = () => {
    history.push("/forgot")
  }

  return (
    <div className="Login">
      <Button onClick={navigateToSignUp}>Signup</Button>

      <FormGroup controlId="email">
        <FormLabel>Email</FormLabel>
        <FormControl
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup controlId="password">
        <FormLabel>Password</FormLabel>
        <FormControl
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>

      <Button onClick={authenticate} type="Submit">Login</Button>

      <Button onClick={navigateToForgotPassword} >Forgot Password</Button>

    </div>
  );
}
