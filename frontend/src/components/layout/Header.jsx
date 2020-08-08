import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function SignedInUser(props) {
  const [name, setName] = useState("");
  const [isDone, setIsDone] = useState(false);

  if(props.user.fname && !isDone){
    setName(`${props.user.fname} ${props.user.lname}`)
    setIsDone(true)
  }

  return (
    <Navbar.Text>
      Signed in as:
      {' '}
      <a href="#login">{name}</a>
    </Navbar.Text>
  );
}

// TODO implement user/admin info pages, to redirect to

function Header(props) {
  const history = useHistory();

  function getPath(isAdmin){
    if(isAdmin){
      return "/adminDashboard";
    }
    return "/dashboard"
  }

  const navClickHome = () => {
    history.push({
      pathname: getPath(props.user.isAdmin),
      user: props.user
    })
  }


  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Databases 353</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={navClickHome}>Home</Nav.Link>
          <Nav.Link onClick={navClickHome}>
            {props.user.isAdmin ? <span>Admin</span> : <span>User</span>} Profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <SignedInUser user={props.user} />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
