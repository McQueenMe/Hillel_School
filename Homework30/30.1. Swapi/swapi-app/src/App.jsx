import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, clearData } from './redux/actions/swapiActions';
import Footer from './components/Footer';

function App() {
  const [id, setId] = useState('');
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.swapi.data);
  const error = useSelector((state) => state.swapi.error);

  const handleSearch = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      dispatch(fetchData(id));
    }
    setValidated(true);
  };

  const handleClear = () => {
    dispatch(clearData());
    setId('');
    setValidated(false);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1>SWAPI</h1>
      <Form noValidate validated={validated} onSubmit={handleSearch} className="mb-4 w-50">
        <Form.Group controlId="formId">
          <Form.Control
            required
            type="text"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="mb-2"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid ID.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-2 w-100">Get Info</Button>
      </Form>

      {error && <Alert variant="danger" className="w-50">{error}</Alert>}
      {data && <pre className="bg-light p-3 rounded w-50">{JSON.stringify(data, null, 2)}</pre>}

      <Footer onClear={handleClear} />
    </Container>
  );
}

export default App;
