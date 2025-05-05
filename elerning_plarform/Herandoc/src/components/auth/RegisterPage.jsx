import RegisterForm from '../../components/auth/RegisterForm';
import './auth.css'; // Importa los estilos compartidos

export default function RegisterPage() {
  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <RegisterForm />
      </div>
    </div>
  );
}