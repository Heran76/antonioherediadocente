import backgroundHero from '../assets/img/backgroundherandoc.webp';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home-page">
      <div 
        className="hero-image"
        style={{ backgroundImage: `url(${backgroundHero})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Bienvenido a HeránDoc</h1>
          <p>Formación para el desarrollo web</p>
        </div>
      </div>
    </div>
  );
}
