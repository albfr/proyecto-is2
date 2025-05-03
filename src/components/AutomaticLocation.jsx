import React, { useState } from 'react';

function AutomaticLocation() {
  const [ciudad, setCiudad] = useState('Detectar ubicación');
  const [error, setError] = useState('');

  const obtenerUbicacion = () => {
    if (!navigator.geolocation) {
      setError('Tu navegador no soporta geolocalización');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await buscarUbicacion(latitude, longitude);
      },
      () => setError('No se pudo obtener la ubicación'),
      { enableHighAccuracy: true }
    );
  };

  const buscarUbicacion = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      setCiudad(data.address.city || data.address.town || data.address.village || 'Ciudad no reconocida');
    } catch (err) {
      setError('No se pudo reconocer la ciudad');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Comic Sans MS, cursive', maxWidth: '500px', margin: 'auto' }}>
      <button onClick={obtenerUbicacion} style={{ padding: '0.5rem', fontSize: '1rem' }}>
        {ciudad}
      </button>
    </div>
  );
}

export default AutomaticLocation;
