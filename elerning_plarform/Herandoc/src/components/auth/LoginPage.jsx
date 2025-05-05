// src/components/auth/LoginPage.jsx
import AuthLayout from "./AuthLayout";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("¡Login exitoso!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <AuthLayout title="Iniciar Sesión">
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />
        <input 
          type="password" 
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />
        <button 
          type="submit"
          style={{ width: "100%", padding: "10px", background: "#007bff", color: "white" }}
        >
          Entrar
        </button>
      </form>
    </AuthLayout>
  );
}