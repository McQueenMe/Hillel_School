import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Hotels from './components/Hotels';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/hotels" element={<Hotels />} />
    </Routes>
  </Router>
);

export default App;
