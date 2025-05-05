import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { currentUser } = useAuth();
  
  return (
    <div>
      <h2>Bienvenido, {currentUser?.email}</h2>
      {/* Aquí irá el progreso de cursos */}
    </div>
  );
}