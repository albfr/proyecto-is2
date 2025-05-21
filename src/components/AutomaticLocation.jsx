import React, { useState } from 'react';
import WeeklyRecommendations from './WeeklyRecommendations';


function AutomaticLocation() {
  const [ciudad, setCiudad] = useState('Detectar ubicación');
  const [error, setError] = useState('');
  const [recomendaciones, setRecomendaciones] = useState(null);
  

  const obtenerUbicacion = () => {
    if (!navigator.geolocation) {
      setError('Tu navegador no soporta geolocalización');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        await buscarUbicacion(latitude, longitude);
        await buscarRecomendaciones(latitude, longitude);
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

  const buscarRecomendaciones = async (lat, lon) => {
    try {
      const res = await fetch(`/api/recommendations?lat=${lat}&lon=${lon}`);
      const data = await res.json();
      setRecomendaciones(data);
    } catch (err) {
      console.error(err);
      setRecomendaciones(null);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Comic Sans MS, cursive', maxWidth: '500px', margin: 'auto' }}>
      <button onClick={obtenerUbicacion} style={{ padding: '0.5rem', fontSize: '1rem' }}>
        {ciudad}
      </button>
      {recomendaciones && <WeeklyRecommendations recs={recomendaciones} />}
    </div>
  );
}

export default AutomaticLocation;
