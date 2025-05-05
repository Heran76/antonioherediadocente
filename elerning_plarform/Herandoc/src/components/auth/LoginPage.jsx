import AuthLayout from "./AuthLayout";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css"; // Importamos CSS modular

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError({ message: "Por favor, ingresa tu email primero" });
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setError({ code: "reset-sent", message: "📬 ¡Email enviado! Revisa tu bandeja" });
    } catch (error) {
      setError(error);
    }
  };

  return (
    <AuthLayout title="Iniciar Sesión">
      <form onSubmit={handleLogin} className={styles.form}>
        <ErrorMessage error={error} />
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        
        <input 
          type="password" 
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        
        <button type="submit" className={styles.primaryButton}>
          Entrar
        </button>
        
        <button 
          type="button" 
          onClick={handleResetPassword}
          className={styles.textButton}
        >
          ¿Olvidaste tu contraseña?
        </button>
      </form>
    </AuthLayout>
  );
}

function ErrorMessage({ error }) {
  if (!error) return null;
  
  const isSuccess = error.code === "reset-sent";
  const className = isSuccess ? styles.successMessage : styles.errorMessage;

  return (
    <div className={className}>
      {isSuccess ? "✓" : "⚠️"} {error.message}
    </div>
  );
}