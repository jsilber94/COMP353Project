import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const history = useHistory();

  const role = useSelector((state) => {
    return state.authenticationReducer.role
  });


  const navigateToChangePassword = () => {
    history.push('/change');
  }

  const navigateToDashboard = () => {
    if (role === 'admin') {
      history.push('/adminDashboard')
    } else if (role === 'user') {
      history.push('/dashboard')
    }
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

  function generateUsersReport() {
    console.log(1)
  }
  function generateBalancesReport() {
    console.log(2)
  }


  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand onClick={navigateToDashboard}>Databases 353</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={navigateToDashboard}>Dashboard</Nav.Link>
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
      <DropdownButton id="dropdown-menu-align-right" title="Settings"
        className="justify-content-end" alignRight>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
        <Dropdown.Item onClick={navigateToChangePassword}>Change Password</Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
}

export default Header;
