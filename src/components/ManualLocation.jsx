import React, { useState } from 'react';

function ManualLocation() {
  const [ubicacion, setUbicacion] = useState('');
  const [resultado, setResultado] = useState(null);
  const [recomendaciones, setRecomendaciones] = useState(null);
  const [error, setError] = useState('');

  const buscarUbicacion = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(ubicacion)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const lugar = data[0];
        const lat = lugar.lat;
        const lon = lugar.lon;

        setResultado({
          nombre: lugar.display_name,
          lat,
          lon,
        });

        setError('');

        // 📡 Aquí se llama al handler backend
        const res = await fetch(`/api/recommendations?lat=${lat}&lon=${lon}`);
        const recomendacionesData = await res.json();

        setRecomendaciones(recomendacionesData);
      } else {
        setResultado(null);
        setError('No se encontró la ciudad');
        setRecomendaciones(null);
      }
    } catch (err) {
      setError('Error al buscar la ciudad o las recomendaciones');
      setRecomendaciones(null);
    }
  };

  const manejarEnter = (e) => {
    if (e.key === 'Enter') {
      buscarUbicacion();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={buscarUbicacion}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
            marginRight: '0.5rem'
          }}
        >
          Buscar
        </button>

        <input
          type="text"
          placeholder="Ej: Santiago, Chile"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          onKeyDown={manejarEnter}
          autoFocus
          style={{
            flex: 1,
            padding: '0.5rem',
            fontSize: '1rem'
          }}
        />
      </div>

      {resultado && (
        <p style={{ marginTop: '1rem' }}>📍 {resultado.nombre}</p>
      )}

      {recomendaciones && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Recomendaciones por día:</h3>
          {recomendaciones.map((dia, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <strong>{dia.day}</strong>
              <ul>
                {dia.recommendations.map((rec, j) => (
                  <li key={j}>{rec.name} — Similitud: {rec.similarity.toFixed(2)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {error && (
        <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>
      )}
    </div>
  );
}

export default ManualLocation;
