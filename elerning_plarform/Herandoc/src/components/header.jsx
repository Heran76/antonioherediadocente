import '../styles/header.css';
import { Link } from 'react-router-dom';
import userIcon from '../assets/img/agregar-usuario.png'; // Asegúrate de que la ruta sea correcta

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <Link to="/">Inicio</Link>
        <Link to="/academia">Academia</Link>
        <Link to="/sobre-mi">Sobre mí</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
      
      <div className="auth-links">
        <Link to="/acceder" className="auth-link">
          <img src={userIcon} alt="Icono de usuario" className="user-icon" />
          Acceder
        </Link>
        <Link to="/registro" className="auth-link">Registrarse</Link>
      </div>
    </header>
  );
}