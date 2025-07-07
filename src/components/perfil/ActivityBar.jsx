import React, { useState } from 'react';
import styles from '@/styles/perfil/ActivityBar.module.css';

function ActivityBar() {
  const [notifications, setNotificationsEnabled] = useState(false);
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSaveChanges = async () => {
    setMessage('');
    if (!city.trim()) {
      setMessage('Por favor ingresa la ubicación.');
      return;
    }

    try {
      setLoading(true);
      const params = new URLSearchParams();
      params.append('notifications', notifications);
      params.append('city', city);
      console.log(city);
      console.log(notifications);

      const res = await fetch(`/api/updatePreferences?${params.toString()}`, {
  method: 'GET',
  credentials: 'include'
});
;
      const data = await res.json();

      if (res.ok) {
        setMessage('Preferencias guardadas correctamente.');
      } else {
        setMessage(data.message || 'Error al guardar.');
      }
    } catch (error) {
      setMessage('Error de red o del servidor.');
    } finally {
      setLoading(false);
    }
  };

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
            checked={notifications}
            onChange={() => setNotificationsEnabled(!notifications)}
          />
          <label htmlFor="check" className={styles.notifButton} />
          <p className={styles.toggleLabel}>Sí</p>
        </div>

        {notifications && (
          <>
            <div className={styles.locationInputContainer}>
              <input
                type="text"
                className={styles.locationInput}
                placeholder="Indica la ubicación."
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <button
              className={styles.submitButton}
              onClick={handleSaveChanges}
              disabled={loading}
            >
              {loading ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </>
        )}

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default ActivityBar;
