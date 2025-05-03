import React from 'react';

function ActivityRecommendation({ text }) {     //Receives recommendation text.
  return (
    <div className="recommendation-rect">
      <p>
        {text || 'Recomendaciones de actividades basadas en usuarios + personalizaciones de usuario.'}
      </p>
    </div>
  );
}

export default ActivityRecommendation;