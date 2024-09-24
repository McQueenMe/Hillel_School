import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Hotels = () => {
   const location = useLocation();
   const [hotels, setHotels] = useState(location.state?.hotels || []);

   useEffect(() => {
      if (!hotels.length) {
         axios.get('http://localhost:5000/hotels').then((res) => setHotels(res.data));
      }
   }, [hotels]);

   return (
      <Container>
         <h1>Available Hotels</h1>
         <Row>
            {hotels.map((hotel) => (
               <Col md={4} key={hotel.id} className="mb-4">
                  <Card>
                     {/* Stretch the image across full width */}
                     <Card.Img variant="top" src="https://via.placeholder.com/140" className="w-100" style={{ objectFit: 'cover', height: '200px' }} />
                     <Card.Body>
                        <Card.Title>{hotel.name}</Card.Title>
                        <Card.Text>
                           <strong>address:</strong> {hotel.address}
                        </Card.Text>
                        <Card.Text>
                           <strong>city:</strong> {hotel.city}, state: {hotel.state}, country code: {hotel.country_code}
                        </Card.Text>
                        <Card.Text>
                           {hotel.hotel_rating} stars
                        </Card.Text>
                     </Card.Body>
                  </Card>
               </Col>
            ))}
         </Row>
      </Container>
   );
};

export default Hotels;
