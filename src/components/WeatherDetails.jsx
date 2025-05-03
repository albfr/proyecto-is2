import React from 'react';
import styles from '@/styles/WeatherDetails.module.css'

function WeatherDetails({ feelsLike, uvIndex, shadeFeelsLike, windSpeed }) {
  return (
    <div className={styles.weather_info}>
      <div className={styles.grid_item}><b>Sensaciónº: </b>{feelsLike ?? 'N/A'}</div>
      <div className={styles.grid_item}><b>índice UV: </b>{uvIndex ?? 'N/A'}</div>
      <div className={styles.grid_item}><b>Sensación en la sombraº: </b>{shadeFeelsLike ?? 'N/A'}</div>
      <div className={styles.grid_item}><b>Viento: {windSpeed ?? 'N/A'} km/h</b></div>
    </div>
  );
}

export default WeatherDetails;