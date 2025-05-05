// src/components/auth/AuthLayout.jsx
import { Link } from "react-router-dom";

export default function AuthLayout({ children, title }) {
  return (
    <div style={{ 
      maxWidth: "400px", 
      margin: "2rem auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
      <h2>{title || "Bienvenido"}</h2>
      {children}
      <div style={{ marginTop: "20px" }}>
        <Link to="/login">Login</Link> | <Link to="/register">Registro</Link>
      </div>
    </div>
  );
}