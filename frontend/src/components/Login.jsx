import React, { useState } from 'react';
import {
  Button, FormControl, FormGroup, FormLabel,
} from 'react-bootstrap';
import { apiLogin } from '../Api';

// eslint-disable-next-line react/prop-types
export default function Login({ setLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const authenticate = () => {
    apiLogin(email, password)
      .then((response) => {
        if (response.data.success) {
          setLogin(true);
        }
        setErrorMessage(response.data.message);
      }).catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  };

  return (
    <div className="Login">

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

    </div>
  );
}
