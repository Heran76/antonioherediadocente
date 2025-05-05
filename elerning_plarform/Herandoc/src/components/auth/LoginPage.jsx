import LoginForm from '../../components/auth/LoginForm';
import './auth.css'; // Importa los estilos compartidos

export default function LoginPage() {
  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <LoginForm />
      </div>
    </div>
  );
}