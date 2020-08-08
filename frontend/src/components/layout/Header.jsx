import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

function SignedInUser(props) {
  if (props.name === '') {
    return null;
  }
  return (
    <Navbar.Text>
      Signed in as:
      {' '}
      <a href="#login">{props.name}</a>
    </Navbar.Text>
  );
}
function Header(props) {
  let admin = false;

  const user = useSelector((state) => {
    return state.authenticationReducer
  });
  if (user && user.isLoggedIn === true && user.isAdmin === 1) {
    admin = true;
  }

  function generateUsersReport(){
    console.log(1)
  }
  function generateBalancesReport(){
    console.log(2)
  }
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Databases 353</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#admin">Admin</Nav.Link>
          <Nav.Link href="#user">User</Nav.Link>
          {
            admin ?
              <Nav.Link onClick={generateUsersReport}>Report of All Users</Nav.Link> : ""
          }
          {
            admin ?
              <Nav.Link onClick={generateBalancesReport}>Report outstanding balances</Nav.Link> : ""
          }

        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <SignedInUser name={props.user} />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
