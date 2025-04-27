import '../styles/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <Link to="/">Inicio</Link>
        <Link to="/academia">Academia</Link>
        <Link to="/sobre-mi">Sobre mí</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}