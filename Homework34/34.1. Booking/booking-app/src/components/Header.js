import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
   return (
      <Navbar expand="lg" className="custom-header">
         <div className="header-left">
            <div className="yellow-circle" />
            <Nav.Link href="/booking" className="nav-link-left">Booking</Nav.Link>
         </div>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
               <Nav.Link href="/" className="nav-link-right nav-link-custom">Home</Nav.Link>
               <Nav.Link href="/about" className="nav-link-right nav-link-custom">About</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}

export default Header;
