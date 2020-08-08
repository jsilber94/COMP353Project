import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, FormControl, FormGroup, FormLabel, Card } from 'react-bootstrap';
import Header from '../components/layout/Header';
import NotFound from '../pages/NotFound';


function ProfileInformation(){

}

function ProfilePage(props){
    const history = useHistory()

    if(props.user){
      return (    <div>
            {props.header}
              <Card style={{ width: '50%', padding: '10%', margin: 'auto', marginTop: '2%' }}>
              <FormGroup controlId="email">
                <FormLabel>Email: {props.user.email}</FormLabel>
                </FormGroup>
                <FormGroup controlId="fname">
                <FormLabel>First Name: {props.user.fname}</FormLabel>
                </FormGroup>
                <FormGroup controlId="lname">
                <FormLabel>Last Name: {props.user.lname}</FormLabel>
                </FormGroup>
               { props.user.balance ? <FormGroup controlId="Balance">
                <FormLabel>Account balance: {props.user.email}</FormLabel>
                </FormGroup> : null}
                <FormGroup controlId="email">
                <FormLabel>Email: {props.user.email}</FormLabel>
                </FormGroup>
                <FormGroup controlId="email">
                <FormLabel>Email: {props.user.email}</FormLabel>
                </FormGroup>
        
                <FormGroup controlId="password">
                  <FormLabel>Password</FormLabel>
                </FormGroup>
        
                <Button type="Submit">Save</Button>
              </Card>
        </div>)
    }else{
        return (
          <NotFound/>
        )
    }

  }

export default ProfilePage;