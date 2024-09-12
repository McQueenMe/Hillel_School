import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
   return (
      <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0', marginTop: 'auto', width: '100%' }}>
         <Container>
            <Typography variant="body2" align="center">
               <div>© 2024 Ягодченко Микита Олексийович</div>
               <div>+380997202221</div>
            </Typography>
         </Container>
      </footer>
   );
}

export default Footer;
