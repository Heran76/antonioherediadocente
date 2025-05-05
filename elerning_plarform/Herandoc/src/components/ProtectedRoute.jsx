// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function ProtectedRoute({ children }) {
  const user = auth.currentUser;
  
  if (!user) {
    // Si no hay usuario logueado, redirige al login
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, muestra el componente hijo
  return children;
}