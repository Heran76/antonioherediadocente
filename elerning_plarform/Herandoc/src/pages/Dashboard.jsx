// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import '../styles/dashboard.css'; // Importamos los estilos

export default function Dashboard() {
  const [cursos, setCursos] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');

  // Obtener datos del usuario al cargar el componente
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        // Obtener datos adicionales del usuario desde Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setNombreUsuario(userDoc.data().nombre || 'Estudiante'); // Usa 'Estudiante' como valor por defecto
        }
      }
    };

    fetchUserData();
  }, []);

  // Datos de ejemplo (luego los traerás de Firestore)
  const cursosEjemplo = [
    {
      id: 1,
      nombre: "Curso de HTML",
      nivel: "Principiante",
      progreso: 45,
      imagen: "https://i.imgur.com/3Jk7qAN.png"
    },
    {
      id: 2,
      nombre: "Curso de CSS",
      nivel: "Intermedio",
      progreso: 20,
      imagen: "https://i.imgur.com/Y3w6QKx.png"
    }
  ];

  return (
    <div className="dashboard-container">
      <h1>Mi ruta de aprendizaje</h1>
      <h2>Bienvenido, {nombreUsuario}</h2>
      <div className="cursos-grid">
        {cursosEjemplo.map((curso) => (
          <div key={curso.id} className="curso-card">
            <img 
              src={curso.imagen} 
              alt={curso.nombre} 
              className="curso-imagen"
            />
            <div className="curso-info">
              <h3>{curso.nombre}</h3>
              <p className="curso-nivel">Nivel: {curso.nivel}</p>
              <div className="progreso-container">
                <div 
                  className="progreso-barra"
                  style={{ width: `${curso.progreso}%` }}
                ></div>
                <span>{curso.progreso}% completado</span>
              </div>
              <button className="boton-curso">
                Ir al curso →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}