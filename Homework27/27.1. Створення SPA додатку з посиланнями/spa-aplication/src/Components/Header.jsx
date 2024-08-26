import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = ({ toggleTheme, currentTheme }) => {
   return (
      <header>
         <Navbar bg={currentTheme === 'light' ? 'light' : 'dark'} variant={currentTheme} expand="lg" className="justify-content-center">
            <Container>
               <Navbar.Brand href="/" className={currentTheme === 'light' ? 'text-dark' : 'text-light'}>My App</Navbar.Brand>
               <Nav className="ml-auto">
                  <Nav.Link href="/" className={currentTheme === 'light' ? 'text-dark' : 'text-light'}>Головна</Nav.Link>
                  <Nav.Link href="/contacts" className={currentTheme === 'light' ? 'text-dark' : 'text-light'}>Контакти</Nav.Link>
                  <Nav.Link href="/about" className={currentTheme === 'light' ? 'text-dark' : 'text-light'}>Про мене</Nav.Link>
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
