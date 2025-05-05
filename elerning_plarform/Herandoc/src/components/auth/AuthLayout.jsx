import { Link } from "react-router-dom";
import styles from "../../styles/authStyles.module.css"; // Estilos compartidos

export default function AuthLayout({ children, title }) {
  return (
    <div className={styles.authContainer}>
      <h2 className={styles.authTitle}>{title || "Bienvenido"}</h2>
      {children}
      <div className={styles.authLinks}>
        <Link to="/login">Login</Link> | <Link to="/register">Registro</Link>
      </div>
    </div>
  );
}