import React, { useState, useEffect } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRedirect = () => {
    // Replace 'https://your-new-url.com' with the actual URL you want to redirect to
    window.location.href = 'https://herramientas-migraciones.netlify.app/';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-100 to-blue-200 p-4">
      <div 
        className={`text-center p-8 bg-white rounded-lg shadow-md transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-3xl font-semibold mb-4 text-teal-700">
          Bienvenido!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Se ha renovado la app para ofrecerte una mejor experiencia!
        </p>
        <button
          onClick={handleRedirect}
          className="px-6 py-3 bg-teal-500 text-white font-medium rounded-full shadow-md hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
        >
          Explorar la nueva versión
        </button>
        <div className="mt-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-t-4 border-b-4 border-teal-500 rounded-full animate-spin"></div>
          </div>
          <p className="text-teal-600 relative z-10 bg-white inline-block px-2">
            Cargando nuevas funciones...
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;