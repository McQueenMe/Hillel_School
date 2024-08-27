import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = ({ toggleTheme, currentTheme }) => {
   return (
      <header>
         <Navbar bg="light" expand="lg" className="justify-content-center fixed-top">
            <Container>
               <Navbar.Brand href="/">My App</Navbar.Brand>
               <Nav className="ml-auto">
                  <Nav.Link href="/">Головна</Nav.Link>
                  <Nav.Link href="/contacts">Контакти</Nav.Link>
                  <Nav.Link href="/about">Про мене</Nav.Link>
               </Nav>
               <Button onClick={toggleTheme} variant={currentTheme === 'light' ? 'dark' : 'light'}>
                  {currentTheme === 'light' ? 'Темна тема' : 'Світла тема'}
               </Button>
            </Container>
         </Navbar>
      </header>
   );
};

export default Header;
