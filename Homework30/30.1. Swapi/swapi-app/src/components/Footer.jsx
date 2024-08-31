import React from 'react';
import { Button } from 'react-bootstrap';

function Footer({ onClear }) {
   return (
      <footer className="mt-5">
         <Button variant="danger" onClick={onClear}>
            Clear
         </Button>
      </footer>
   );
}

export default Footer;
