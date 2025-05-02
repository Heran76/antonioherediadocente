
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;