import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, clearData } from '../redux/actions/swapiActions';
import { Button, Container, TextField, Typography, Alert } from '@mui/material';

function SwapiPage() {
   const [id, setId] = useState('');
   const dispatch = useDispatch();
   const data = useSelector((state) => state.swapi.data);
   const error = useSelector((state) => state.swapi.error);

   const handleFetch = () => {
      if (id.trim() !== '') {
         dispatch(fetchData(id));
      } else {
         alert('Пожалуйста, введите ID');
      }
   };

   const handleClear = () => {
      dispatch(clearData());
      setId('');
   };

   return (
      <Container className="swapi-page">
         <Typography variant="h4" gutterBottom>SWAPI</Typography>

         <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <TextField
               label="Введите ID"
               value={id}
               onChange={(e) => setId(e.target.value)}
               variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={handleFetch}>
               Поиск
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClear}>
               Очистить
            </Button>
         </div>

         {error && <Alert severity="error">{error}</Alert>}
         {data && (
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
               <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
         )}
      </Container>
   );
}

export default SwapiPage;
