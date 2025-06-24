import React from 'react';
import styles from '@/styles/perfil/ActivityBar.module.css';

function ActivityBar() {
  return (
    <div className={styles.activitybar}>
      <button className={styles.barButton}>Actividades</button>
      
      <div className={styles.notificationSection}> 
        <div className={styles.text}>
          <p>¿Enviar notificaciones al E-Mail asociado?</p>
        </div>

        <div className={styles.notifContainer}>
          <p className={styles.toggleLabel}>No</p>
          <input type="checkbox" id="check" className={styles.hiddenCheckbox} />
          <label htmlFor="check" className={styles.notifButton} />
          <p className={styles.toggleLabel}>Si</p>
        </div>
      </div>
    </div>
  );
}

export default ActivityBar;