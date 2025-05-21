export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100"> {/* Fondo gris claro en toda la pantalla */}
      <div className="bg-blue-600 p-8 text-white"> {/* Barra superior azul */}
        <h1 className="text-4xl font-bold">Bienvenido a HeránDoc tu espacio </h1>
        <p className="text-xl mt-2">Formación para el desarrollo web</p>
      </div>
      
      {/* Sección de prueba con Tailwind */}
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600">¡Tailwind está funcionando!</h2>
        <p className="mt-4 text-gray-700">
          Si ves este recuadro con bordes redondeados y sombra, Tailwind CSS está configurado correctamente.
        </p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Botón de prueba
        </button>
      </div>
    </div>
  );
}