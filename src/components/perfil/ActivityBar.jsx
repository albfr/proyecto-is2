import React, { useState } from 'react';
import styles from '@/styles/perfil/ActivityBar.module.css';

function ActivityBar() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <div className={styles.activitybar}>
      <button className={styles.barButton}>Actividades</button>
      
      <div className={styles.notificationSection}> 
        <div className={styles.text}>
          <p>¿Enviar notificaciones al E-Mail asociado?</p>
        </div>

        <div className={styles.notifContainer}>
          <p className={styles.toggleLabel}>No</p>
          <input 
            type="checkbox" 
            id="check" 
            className={styles.hiddenCheckbox} 
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
          <label htmlFor="check" className={styles.notifButton} />
          <p className={styles.toggleLabel}>Si</p>
        </div>

        {notificationsEnabled && (
          <>
            <div className={styles.locationInputContainer}>
              <input
                type="text"
                className={styles.locationInput}
                placeholder="Indica la ubicación."
              />
            </div>

            <button className={styles.submitButton}>
              Guardar Cambios
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ActivityBar;