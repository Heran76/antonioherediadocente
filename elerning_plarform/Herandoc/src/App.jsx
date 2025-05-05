import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase/firebase';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import TestFirebase from './pages/TestFirebase';
import LoginPage from './components/auth/LoginPage';     // Página de login completa
import RegisterPage from './components/auth/RegisterPage'; // Página de registro completa
import Dashboard from './pages/Dashboard'; // Página privada
import ProtectedRoute from './components/ProtectedRoute'; // Para proteger rutas
import './index.css';

function App() {
  // Verificación de conexión con Firebase (solo en desarrollo)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log("Firebase conectado. Usuario actual:", auth.currentUser);
    }
  }, []);

  return (
    <Router>
      {/* Header visible en todas las páginas */}
      <Header />
      
      {/* Contenido principal dinámico */}
      <main className="main-content">
        <Routes>
          {/* 🏠 Ruta pública - Página de inicio */}
          <Route path="/" element={<Home />} />
          
          {/* ℹ️ Ruta pública - Sobre mí */}
          <Route path="/sobre-mi" element={<SobreMi />} />
          
          {/* 🔥 Ruta pública - Prueba de Firebase */}
          <Route path="/test-firebase" element={<TestFirebase />} />
          
          {/* 🔑 Ruta pública - Login */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* ✏️ Ruta pública - Registro */}
          <Route path="/registro" element={<RegisterPage />} />
          
          {/* 🛡️ Ruta PROTEGIDA - Dashboard (solo para usuarios logueados) */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      
      {/* Footer visible en todas las páginas */}
      <Footer />
    </Router>
  );
}

export default App;