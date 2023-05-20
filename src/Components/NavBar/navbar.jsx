import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <Navbar bg="dark" className='text-white fixed-top' expand="lg">
      <Navbar.Brand href="#home" className='text-white'>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" gap-3 text-end ms-auto">
         
          <Link to="/connexion" className='btn btn-dark  text-decoration-none text-light'>Sign up</Link>           
          <Link to="/connexion" className='btn btn-light  text-decoration-none text-dark'>Log in</Link>           


        </Nav>
      </Navbar.Collapse>
  </Navbar>

  )
}

export default navbar
