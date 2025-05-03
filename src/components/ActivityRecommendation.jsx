import React from 'react';
import styles from "@/styles/ActivityRecommendation.module.css";

function ActivityRecommendation({ text }) {     //Receives recommendation text.
  return (
    <div className={styles.recommendation_rect}>
      <p>
        {text || 'Recomendaciones de actividades basadas en usuarios + personalizaciones de usuario.'}
      </p>
    </div>
  );
}

export default ActivityRecommendation;