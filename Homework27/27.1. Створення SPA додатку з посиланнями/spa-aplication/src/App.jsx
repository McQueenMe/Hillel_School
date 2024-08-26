import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import ErrorBoundary from './Components/ErrorBoundary';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './Components/Contacts';
import About from './Components/About';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ErrorBoundary>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<TodoList currentTheme={theme} />} /> {/* Изменено на currentTheme */}
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
