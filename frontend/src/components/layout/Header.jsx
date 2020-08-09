import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const history = useHistory();

  const id = useSelector((state) => {
    return state.authenticationReducer.id
  })

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

  const navigateToUser = () => {
    history.push('/profile')
  }

  const navigateToApplications = () => {
    history.push('/applications');
  }

  const navigateToPaymentsMethods = () => {
    history.push('/payments');
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
        </Nav>
      </Navbar.Collapse>
      <DropdownButton id="dropdown-menu-align-right" title="Settings"
        className="justify-content-end" alignRight>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
        <Dropdown.Item onClick={navigateToChangePassword}>Change Password</Dropdown.Item>
        <Dropdown.Item onClick={navigateToUser}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={navigateToApplications}>Applications</Dropdown.Item>
        <Dropdown.Item onClick={navigateToPaymentsMethods}>Payment Options</Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
}

export default Header;
