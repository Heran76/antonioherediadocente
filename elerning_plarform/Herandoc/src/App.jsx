import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import TestFirebase from './pages/TestFirebase'; // Asegúrate de importarlo
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebase';

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log("Firebase conectado. Usuario actual:", auth.currentUser);
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/test-firebase" element={<TestFirebase />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;