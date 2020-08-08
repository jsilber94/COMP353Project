import React, { useState } from 'react';
import {
  Button, FormControl, FormGroup, FormLabel,
} from 'react-bootstrap';
import { apiSignUp } from '../../Api';
import { useHistory } from "react-router-dom";
import { loginRedux } from '../../store/action/auth';
import { useDispatch } from 'react-redux';
import { jesseRedux } from '../../store/action/jesse';


// eslint-disable-next-line react/prop-types
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const signup = () => {
    apiSignUp(email, password, fname, lname)
      .then((response) => {
        if (response.data.success) {
          const user = response.data.data
          
          history.push({
            pathname: '/dashboard',
            user: user
          });

          dispatch(jesseRedux(response.data.data));
          dispatch(loginRedux(response.data.data.role, response.data.data.user_id));
          history.push("/dashboard");
        }
        setErrorMessage(response.data.message);
      }).catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  };

  return (
    <div className="SignUp">

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
      <FormGroup controlId="fname">
        <FormLabel>First Name</FormLabel>
        <FormControl
          value={fname}
          type="text"
          onChange={(e) => setfName(e.target.value)}
        />
      </FormGroup>
      <FormGroup controlId="lname">
        <FormLabel>Password</FormLabel>
        <FormControl
          value={lname}
          type="text"
          onChange={(e) => setlName(e.target.value)}
        />
      </FormGroup>

      <Button onClick={signup} type="Submit">Sign Up</Button>

    </div>
  );
}
