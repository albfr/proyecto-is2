import React, { useState } from 'react';

function ManualLocation() {
  const [ubicacion, setUbicacion] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const buscarUbicacion = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(ubicacion)}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const lugar = data[0];
        setResultado({
          nombre: lugar.display_name,
          lat: lugar.lat,
          lon: lugar.lon,
        });
        setError('');
      } else {
        setResultado(null);
        setError('No se encontró la ciudad');
      }
    } catch (err) {
      setError('Error al buscar la ciudad');
    }
  };

  const manejarEnter = (e) => {
    if (e.key === 'Enter') {
      buscarUbicacion();
    }
  };

  return (
      <div style={{ display: 'flex', marginTop: '1rem', alignItems: 'center' }}>
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
  );
}

export default ManualLocation;
