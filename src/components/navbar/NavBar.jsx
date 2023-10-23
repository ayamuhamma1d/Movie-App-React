import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../../assets/images/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg';
import  './navbar.css'
import { NavLink,Link } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary top-fixed shadow">
    <Container>
      <Navbar.Brand href="#home">
        <img className='w-50' src={logo} alt=""/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink to="/" >Home</NavLink>
           <NavLink to="/pages" >Pages</NavLink>
           <NavLink to="/movies" >Movies</NavLink>
           <NavLink to="/tv" >TvShowing</NavLink>
           <NavLink to="/blog" >Blog</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar