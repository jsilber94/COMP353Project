import React, { useState } from 'react';
import { Button, FormControl, FormGroup, FormLabel, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { apiSignUp } from '../../Api';
import { loginRedux } from '../../store/action/auth';
import { useDispatch } from 'react-redux';
import AuthHeader from '../../components/layout/AuthHeader'

// eslint-disable-next-line react/prop-types
export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [role, setRole] = useState("user")
  const dispatch = useDispatch();
  const history = useHistory();

  const signup = () => {

    apiSignUp(email, password, fname, lname, role)
      .then((response) => {
        if (response.data.success) {
          if (response.data.data.role === 'admin') {
            dispatch(loginRedux('admin', response.data.data.user_id, response.data.data.category));
            history.push("/adminDashboard");
          }
          else if (response.data.data.role == 'employer') {
            dispatch(loginRedux('employer', response.data.data.user_id, response.data.data.category));
            history.push("/employerDashboard");
          } else {
            dispatch(loginRedux('user', response.data.data.user_id, response.data.data.category));
            history.push("/dashboard");
          }
        } else {
          setErrorMessage('Email already taken! Please choose another one.');
        }
      }).catch((error) => {
        setErrorMessage('Email already taken! Please choose another one.');
      });
  };

  return (
    <div className="SignUp">
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
        <FormGroup controlId="fname">
          <FormLabel>First Name</FormLabel>
          <FormControl
            value={fname}
            type="text"
            onChange={(e) => setfName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="lname">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            value={lname}
            type="text"
            onChange={(e) => setlName(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="role">
          <FormLabel>Role</FormLabel>
          <FormControl
            as="select"
            onChange={(e) => {
              let rl = `${e.target.value}`.toLowerCase()
              setRole(rl)}}
          >
            <option>User</option>  
            <option>Employer</option>  
          </FormControl>
        </FormGroup>
        <Button onClick={signup} type="Submit">Sign Up</Button>
        <div>
          {errorMessage}
        </div>
      </Card>


    </div>
  );
}
