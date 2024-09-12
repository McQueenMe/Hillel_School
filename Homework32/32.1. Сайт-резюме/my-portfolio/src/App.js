import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TodoPage from './pages/TodoPage';
import SwapiPage from './pages/SwapiPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/swapi" element={<SwapiPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
