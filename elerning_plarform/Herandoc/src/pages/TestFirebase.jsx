import { auth, db } from '../firebase/firebase';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

export default function TestFirebase() {
  useEffect(() => {
    console.log("Usuario actual:", auth.currentUser);
    getDocs(collection(db, 'cursos')).then((snapshot) => {
      console.log("Cursos:", snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <main style={{ minHeight: '60vh', padding: '2rem' }}>
      <h2>Prueba de Firebase</h2>
      <p>Revisa la consola del navegador (F12 → Console)</p>
    </main>
  );
}