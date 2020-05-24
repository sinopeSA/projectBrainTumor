import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Medical Image Analysis</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/login">Login</NavItem>
          <NavItem eventKey={3} href="/MedicalRecord">Medical Record</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;