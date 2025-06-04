import React from 'react';
import styles from '@/styles/home/ActivityRecommendation.module.css'

function ActivityRecommendation({ text, similarity }) {     //Receives recommendation text.
  let hue = 120*similarity;
  //styles.recommendation_color = "background-color: hsl(hue, 100, 85)";
  return (
    <li className={styles.recommendation_li}>
      <div className={styles.recommendation_rect} style={{ backgroundColor: `hsl(${hue}, 100%, 90%)` }}>
        <p>
          {text || 'Recomendaciones de actividades basadas en usuarios + personalizaciones de usuario.'}
        </p>
      </div>
    </li>
  );
}

export default ActivityRecommendation;