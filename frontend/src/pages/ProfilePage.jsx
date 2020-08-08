import React, { useState } from 'react';
import { Button, Card, FormControl, FormGroup, FormLabel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { apiGetUser, apiUpdateUser } from '../Api';
import Header from '../components/layout/Header';
import UserCategory from '../components/UserCategory';

function ChangeCard(props) {
  const [email, setEmail] = useState(props.user.email);
  const [fname, setFName] = useState(props.user.fname);
  const [lname, setLName] = useState(props.user.lname);
  const [user, setUser] = useState(props.user)

  const updateUserInfo = () => {

    let tempUser = user;
    tempUser.email = email;
    tempUser.fname = fname;
    tempUser.lname = lname;

    console.log(tempUser)

    apiUpdateUser(props.user.user_id, tempUser).then((response) => {
      if (response.status === 200) {
        props.func()
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <Card style={{ width: '50%', padding: '10%', margin: 'auto', marginTop: '2%' }}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>First Name</FormLabel>
          <FormControl
            value={fname}
            type="fname"
            onChange={(e) => setFName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Last Name</FormLabel>
          <FormControl
            value={lname}
            type="lname"
            onChange={(e) => setLName(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" onClick={updateUserInfo}>Save</Button>
      </Card>
    </div>

  )
}

function ProfilePage() {
  const [user, setUser] = useState("");
  const [userFetched, setUserFetched] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [changeInfoCard, setChangeInfoCard] = useState(null)

  const id = useSelector((state) => {
    return state.authenticationReducer.id;
  })

  const genChangeCard = () => {
    setChangeInfoCard(<ChangeCard user={user} />)
  }

  const deleteAccount = () => {

  }

  const fetchUser = () => {
    apiGetUser(id)
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data[0])
          setChangeInfoCard(null)
        }
      })
  }

  if (!userFetched) {
    fetchUser();
    setUserFetched(true)
    console.log(user)
  }

  return (<div>
    <Header />
    <UserCategory />
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
    {changeInfoCard ? <ChangeCard func={fetchUser} user={user} /> : null}
  </div>)
}

export default ProfilePage;