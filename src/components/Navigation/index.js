import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

import "./style.css"

const navbar = () => {
  return (
    <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand className="brand">Grant Cawley</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
          <Nav className="links">
            <Nav.Link href='/'>About</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
            <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default navbar
