import '../styles/header.css';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <a href="/">Inicio</a>
        <a href="/academia">Academia</a>
        <a href="/sobre-mi">Sobre mí</a>
        <a href="/contacto">Contacto</a>
      </nav>
    </header>
  );
}