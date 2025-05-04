import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';

// 1. Crear el contexto
const AuthContext = createContext();

// 2. Crear el proveedor
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// 3. Crear el hook personalizado
export function useAuth() {
  return useContext(AuthContext);
}