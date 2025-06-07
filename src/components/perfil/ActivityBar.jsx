import React from 'react';
import styles from '@/styles/perfil/ActivityBar.module.css';

function ActivityBar() {
  return (
    <div className={styles.activitybar}>
      <button className={styles.barButton}>Actividades</button>
    </div>
  );
}

export default ActivityBar;
