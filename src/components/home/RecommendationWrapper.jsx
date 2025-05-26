import React, { useState } from 'react';
import ManualLocation from '@/components/home/ManualLocation';
import AutomaticLocation from '@/components/home/AutomaticLocation';
import WeeklyRecommendations from '@/components/home/WeeklyRecommendations';
import styles from '@/styles/home/RecommendationWrapper.module.css';

export default function RecommendationWrapper() {
  const [recommendationsData, setRecommendationsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const obtenerRecomendaciones = async (lat, lon) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/recommendations?lat=${lat}&lon=${lon}`);
      const data = await res.json();
      setRecommendationsData(data);
      setError(null);
    } catch (e) {
      console.error("Error al obtener recomendaciones:", e);
      setError(e.message);
      setRecommendationsData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.recWrap}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
        <AutomaticLocation onCoordsReady={obtenerRecomendaciones} />
        <ManualLocation onCoordsReady={obtenerRecomendaciones} />
      </div>

      {loading && <p>Cargando recomendaciones...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {recommendationsData && <WeeklyRecommendations recs={recommendationsData} />}
    </div>
  );
}
