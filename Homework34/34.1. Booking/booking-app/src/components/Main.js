import { Form, Field } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
   Box, Button, TextField, MenuItem, Grid, Typography,
} from '@mui/material';

function Main() {
   const [destinations, setDestinations] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/destination`).then((res) => setDestinations(res.data));
   }, []);

   const validate = (values) => {
      const errors = {};
      if (!values.destination) {
         errors.destination = 'Required';
      }
      if (!values.checkin) {
         errors.checkin = 'Required';
      }
      if (!values.checkout) {
         errors.checkout = 'Required';
      } else if (values.checkin && new Date(values.checkin) >= new Date(values.checkout)) {
         errors.checkout = 'Check-out date must be after check-in date';
      }
      if (!values.adults) {
         errors.adults = 'Required';
      }
      if (values.adults < 1) {
         errors.adults = 'At least one adult is required';
      }
      if (values.children === undefined) {
         errors.children = 'Required';
      }
      return errors;
   };

   const onSubmit = async (values) => {
      try {
         console.log('Sending form data:', values);
         const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/hotels?destination=${values.destination}&checkin=${values.checkin}&checkout=${values.checkout}&adults=${values.adults}&children=${values.children}`,
         );

         if (response.status === 200) {
            console.log('Response from server:', response.data);
            navigate('/hotels', { state: { hotels: response.data } });
         }
      } catch (error) {
         console.error('Error fetching hotels:', error);
      }
   };

   return (
      <Box sx={{ p: 3 }}>
         <Typography variant="h4" gutterBottom>
            Search Hotels
         </Typography>
         <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, submitting, pristine }) => (
               <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={6}>
                        <Field name="destination" component="select">
                           {({ input, meta }) => (
                              <TextField
                                 select
                                 fullWidth
                                 label="Destination"
                                 {...input}
                                 error={meta.touched && Boolean(meta.error)}
                                 helperText={meta.touched && meta.error ? meta.error : ''}
                              >
                                 <MenuItem value="">Select Destination</MenuItem>
                                 {destinations.map((dest) => (
                                    <MenuItem key={dest.id} value={dest.label}>
                                       {dest.label}
                                    </MenuItem>
                                 ))}
                              </TextField>
                           )}
                        </Field>
                     </Grid>

                     <Grid item xs={12} sm={3}>
                        <Field name="checkin" component="input">
                           {({ input, meta }) => (
                              <TextField
                                 fullWidth
                                 type="date"
                                 label="Check In"
                                 InputLabelProps={{ shrink: true }}
                                 {...input}
                                 error={meta.touched && Boolean(meta.error)}
                                 helperText={meta.touched && meta.error ? meta.error : ''}
                              />
                           )}
                        </Field>
                     </Grid>

                     <Grid item xs={12} sm={3}>
                        <Field name="checkout" component="input">
                           {({ input, meta }) => (
                              <TextField
                                 fullWidth
                                 type="date"
                                 label="Check Out"
                                 InputLabelProps={{ shrink: true }}
                                 {...input}
                                 error={meta.touched && Boolean(meta.error)}
                                 helperText={meta.touched && meta.error ? meta.error : ''}
                              />
                           )}
                        </Field>
                     </Grid>

                     <Grid item xs={12} sm={6}>
                        <Field name="adults" component="input" defaultValue={1}>
                           {({ input, meta }) => (
                              <TextField
                                 fullWidth
                                 type="number"
                                 label="Adults"
                                 {...input}
                                 error={meta.touched && Boolean(meta.error)}
                                 helperText={meta.touched && meta.error ? meta.error : ''}
                              />
                           )}
                        </Field>
                     </Grid>

                     <Grid item xs={12} sm={6}>
                        <Field name="children" component="input" defaultValue={0}>
                           {({ input, meta }) => (
                              <TextField
                                 fullWidth
                                 type="number"
                                 label="Children"
                                 {...input}
                                 error={meta.touched && Boolean(meta.error)}
                                 helperText={meta.touched && meta.error ? meta.error : ''}
                              />
                           )}
                        </Field>
                     </Grid>
                  </Grid>

                  <Button
                     variant="contained"
                     color="primary"
                     type="submit"
                     disabled={submitting || pristine}
                     sx={{ mt: 3 }}
                  >
                     Send
                  </Button>
               </form>
            )}
         />

         <Box sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>
               Travel With
               <span style={{ color: '#f0a500' }}>Booking</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
         </Box>
      </Box>
   );
}

export default Main;
