import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <AppBar position="static" style={{ marginBottom: '30px' }}>
         <Toolbar style={{ justifyContent: 'space-between' }}>
            <Typography variant="h6">Мой Сайт</Typography>
            <div>
               <Button color="inherit" component={Link} to="/">Главная</Button>
               <Button color="inherit" component={Link} to="/todo">TODO</Button>
               <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
            </div>
         </Toolbar>
      </AppBar>
   );
}

export default Header;
