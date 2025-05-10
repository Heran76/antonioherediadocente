// src/components/auth/RegisterPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Paso 1: Importar para redirección
import { auth, db } from '../../firebase/firebase'; // Paso 2: Añadir db
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Paso 3: Importar Firestore
import AuthLayout from './AuthLayout';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState(''); // Paso 4: Añadir campo nombre
  const navigate = useNavigate(); // Paso 5: Preparar redirección

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Paso 6: Registrar usuario en Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Paso 7: Guardar datos adicionales en Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: email,
        nombre: nombre,
        fechaRegistro: new Date()
      });

      // Paso 8: Redirigir al dashboard
      alert('¡Registro exitoso! Ahora irás al escritorio');
      navigate('/dashboard'); 

    } catch (error) {
      // Paso 9: Manejo de errores mejorado
      let mensaje = '';
      if (error.code === 'auth/email-already-in-use') {
        mensaje = 'Este email ya está registrado';
      } else if (error.code === 'auth/weak-password') {
        mensaje = 'La contraseña debe tener al menos 6 caracteres';
      } else {
        mensaje = error.message;
      }
      alert('Error: ' + mensaje);
    }
  };

  return (
    <AuthLayout title="Registro">
      <form onSubmit={handleRegister}>
        {/* Paso 10: Añadir campo nombre al formulario */}
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ width: '100%', margin: '10px 0', padding: '8px' }}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', margin: '10px 0', padding: '8px' }}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', margin: '10px 0', padding: '8px' }}
          required
          minLength={6}
        />
        <button
          type="submit"
          style={{ 
            width: '100%', 
            padding: '10px', 
            background: '#28a745', 
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Registrarse
        </button>
      </form>
    </AuthLayout>
  );
}