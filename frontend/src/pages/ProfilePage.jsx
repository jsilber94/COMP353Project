import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, FormControl, FormGroup, FormLabel, Card, ListGroup, ListGroupItem, Form} from 'react-bootstrap';
import Header from '../components/layout/Header';
import NotFound from '../pages/NotFound';
import { useSelector } from 'react-redux';
import { apiGetUser } from '../Api'

function ChangeCard(props){
  const [email, setEmail] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  const updateUserInfo = () => {

  }

  return (
      <Card style={{ width: '50%', padding: '10%', margin: 'auto', marginTop: '2%' }}>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl 
              value={props.user.email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>First Name</FormLabel>
            <FormControl
              value={props.user.fname}
              type="fname"
              onChange={(e) => setFName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
          <FormLabel>Last Name</FormLabel>
            <FormControl
              value={props.user.lname}
              type="lname"
              onChange={(e) => setLName(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Save</Button>
      </Card>
  )
}

function ProfilePage(){
    const [user, setUser] = useState("");
    const [userFetched, setUserFetched] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [changeInfoCard, setChangeInfoCard] = useState(null)

    const id = useSelector((state) =>{
      return state.authenticationReducer.id;
    })

    const genChangeCard = () => {
      setChangeInfoCard(<ChangeCard user={user} />)
    }


    const fetchUser = () => {
      apiGetUser(id)
      .then((response)=> {
        if(response.status === 200){
          setUser(response.data[0])
        }
      })
    }

    if(!userFetched){
      fetchUser();
      setUserFetched(true)
      console.log(user)
    }

      return (    <div>
            <Header/>
              <Card style={{ width: '50%', padding: '10%', margin: 'auto', marginTop: '2%' }}>
                <ListGroup>
                  <ListGroupItem>Email: {user.email} </ListGroupItem>
                  <ListGroupItem>First Name: {user.fname}</ListGroupItem>
                  <ListGroupItem>Last Name: {user.lname}</ListGroupItem>
                  {user.balance ? <ListGroupItem>Balance: {user.balance}</ListGroupItem> : null}
                </ListGroup>
                <Button style={{ marginTop: '20px' }} onClick={genChangeCard} >Change Information</Button>
                <Button variant="danger" style={{ marginTop: '20px' }}>Delete Account</Button>
              </Card>
              {changeInfoCard}
        </div>)
  }

export default ProfilePage;