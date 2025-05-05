// src/components/auth/RegisterPage.jsx
import { useState } from 'react';
import { auth } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import AuthLayout from './AuthLayout';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('¡Registro exitoso!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <AuthLayout title="Registro">
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', margin: '10px 0', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', margin: '10px 0', padding: '8px' }}
        />
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', background: '#28a745', color: 'white' }}
        >
          Registrarse
        </button>
      </form>
    </AuthLayout>
  );
}