import React from 'react';
import styles from '@/styles/HealthcareTips.module.css'

function HealthCareTips({ tips }) {     //Receives the tips text.
  return (
    <div className={styles.healthcare}>
      <p>
        {tips || 'Recomendaciones de cuidado general respecto al clima.'}
      </p>
    </div>
  );
}

export default HealthCareTips;