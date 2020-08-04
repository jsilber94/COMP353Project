import React, { useState } from 'react';
import { Button, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { apiLogin } from '../Api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const authenticate = () => {
    apiLogin(email, password)
      .then((response) => {
        // Store id
        // redirect to main screen
        console.log(response);
      }).catch((error) => {
        setErrorMessage(error.message);
      });
  }

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
