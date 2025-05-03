import React, { useState, useEffect } from 'react';
import WeeklyRecommendations from './WeeklyRecommendations';

function ManualLocation() {
    const [update, setUpdate] = useState(false);
    const [ubicacion, setUbicacion] = useState('');
    const [resultado, setResultado] = useState(null);
    const [recomendaciones, setRecomendaciones] = useState(null);

    let recomendacionesData;

    useEffect(() => {
        if (update) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(ubicacion)}`)
            .then((response) => {
                response.json().then((d) => {
                    const data = d;
                    if (data.length > 0) {
                        const lugar = data[0];
                        const lat = lugar.lat;
                        const lon = lugar.lon;
                        fetch(`/api/recommendations?lat=${lat}&lon=${lon}`)
                        .then((res) => {
                            // recomendacionesData = res.json();
                            res.json()
                            .then((algo) => {
                                recomendacionesData = algo;
                                console.log(recomendacionesData);
                                setRecomendaciones(recomendacionesData);
                                setResultado({
                                    nombre: lugar.display_name,
                                    lat,
                                    lon
                                });
                            });
                        })
                        .catch((err) => {
                            console.error(err);
                            setRecomendaciones(null);
                            setResultado(null);
                        });
                    } else {
                        setResultado(null);
                        setRecomendaciones(null);
                    }
                });
            })
        }
    }, [update, ubicacion]);

    const manejarEnter = (e) => {
        if (e.key === 'Enter') {
            setUpdate(true);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
        onClick={() => setUpdate(true)}
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
        onChange={(e) => {
            setUpdate(false);
            setUbicacion(e.target.value);
        }}
        onKeyDown={manejarEnter}
        autoFocus
        style={{
            flex: 1,
                padding: '0.5rem',
                fontSize: '1rem'
        }}
        />
        </div>

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
        <WeeklyRecommendations recs={recomendacionesData}></WeeklyRecommendations>
        </div>
    );
}

export default ManualLocation;
