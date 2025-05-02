import { useEffect } from 'react';
import '../styles/sobre-mi.css';
import avatar from '../assets/img/avatar.webp';

export default function SobreMi() {
  // Efecto de partículas (opcional)
  useEffect(() => {
    const cards = document.querySelectorAll('.experiencia-card');
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const particle = document.createElement('div');
      particle.className = 'particle-effect';
      
      const rect = card.getBoundingClientRect();
      particle.style.left = `${e.clientX - rect.left}px`;
      particle.style.top = `${e.clientY - rect.top}px`;
      particle.style.width = `${Math.random() * 5 + 2}px`;
      particle.style.height = particle.style.width;
      card.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 1000);
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  return (
    <div className="sobre-mi-page">
      <div className="sobre-mi-container">
        {/* Cabecera con avatar */}
        <div className="avatar-container">
          <img src={avatar} alt="Avatar" className="avatar-img" />
          <h1>¿Quién soy?</h1>
          <hr></hr>
        </div>

        {/* Biografía */}
        <div className="bio-text">
          <p>
            Hola, soy Antonio Heredia, docente especializado en formación profesional 
            para adultos con más de 10 años de experiencia en desarrollo web y enseñanza.
          </p>
          <p>
            Mi pasión es ayudar a profesionales a adquirir las habilidades digitales 
            necesarias para destacar en el mercado laboral actual.
          </p>
        </div>

        {/* Sección de experiencia con tarjetas futuristas */}
        <section className="experiencia-section">
          <h2>Mi Experiencia</h2>
          <hr></hr>
          <div className="experiencia-grid">
            <div className="experiencia-card">
              <h3>Docencia</h3>
              <p>+10 años formando profesionales en tecnologías web</p>
            </div>
            <div className="experiencia-card">
              <h3>Desarrollo</h3>
              <p>Fullstack Developer con experiencia en proyectos reales</p>
            </div>
            <div className="experiencia-card">
              <h3>Metodología</h3>
              <p>Enfoque práctico y orientado a resultados</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}