import '../styles/sobre-mi.css';

export default function SobreMi() {
  return (
    <div className="sobre-mipage">
      <div className="sobre-mi-background"></div>
      <div className="sobre-mi-content">
        <section className="bio-section">
          <h1>¿Quién soy?</h1>
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
        </section>

        <section className="experiencia-section">
          <h2>Mi Experiencia</h2>
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