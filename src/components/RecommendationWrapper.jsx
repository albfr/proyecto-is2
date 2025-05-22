import React, { useState, useEffect } from 'react';
import ManualLocation from '@/components/ManualLocation';
import WeeklyRecommendations from '@/components/WeeklyRecommendations';
import styles from '@/styles/RecommendationWrapper.module.css';

export default function RecommendationWrapper() {
  const [recommendationsData, setRecommendationsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        //This fetches from ./pages/api/recommendations.js
        const response = await fetch('/pages/api/recommendations');
        const data = await response.json();
        setRecommendationsData(data);
        setError(null);
      } catch (e) {
        console.error("Failed to fetch recommendations:", e);
        setError(e.message);
        setRecommendationsData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.recWrap}>
      <div style={{ marginBottom: '2rem' }}>
        <ManualLocation />
      </div>
      {recommendationsData && recommendationsData.length > 0 && (
        <WeeklyRecommendations recs={recommendationsData} />
      )}
      {!loading && !error && (!recommendationsData || recommendationsData.length === 0) && (
        <p>No existen recomendaciones disponibles en este momento!</p>
      )}
    </div>
  );
}