import React from 'react';

function HealthCareTips({ tips }) {     //Receives the tips text.
  return (
    <div className="healthcare">
      <p>
        {tips || 'Recomendaciones de cuidado general respecto al clima.'}
      </p>
    </div>
  );
}

export default HealthCareTips;