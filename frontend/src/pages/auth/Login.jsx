import React, { useState } from 'react';
import { Button, FormControl, FormGroup, FormLabel, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { apiLogin } from '../../Api';
import { loginRedux } from '../../store/action/auth';
import { jesseRedux } from '../../store/action/jesse';
import AuthHeader from '../../components/layout/AuthHeader'

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

          if (response.data.user.isAdmin == 1) {
            history.push("/adminDashboard");
            dispatch(loginRedux('admin', response.data.user.user_id, response.data.user.category));
          }
          else if (response.data.user.isAdmin == 0) {
            dispatch(jesseRedux(response.data));
            history.push("/dashboard");
            dispatch(loginRedux('user', response.data.user.user_id, response.data.user.category));
          }
        } else {
          setErrorMessage('Wrong credentials!');
        }

      }).catch((error) => {
        setErrorMessage('Wrong credentials!');
      });
  };

  return (
    <div>
      <AuthHeader />
      <Card style={{ width: '50%', padding: '10%', margin: 'auto', marginTop: '2%' }}>
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
      </Card>
    </div>
  );
}
