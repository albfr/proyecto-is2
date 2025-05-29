import React from 'react';
import styles from '@/styles/ActivityBar.module.css';

function ActivityBar() {
  return (
    <div className={styles.activitybar}>
      <button className={styles.barButton}>Actividades</button>
      <button className={styles.barButton}>PlaceHolder 1</button>
      <button className={styles.barButton}>PlaceHolder 2</button>
    </div>
  );
}

export default ActivityBar;
