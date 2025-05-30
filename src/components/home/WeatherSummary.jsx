import React from 'react';
import styles from '@/styles/WeatherSummary.module.css'

function WeatherSummary({ day, date, maxTemp, minTemp, humidity }) {    //Receives specific weather data points via props.
  return (
    <div className={styles.day_date_temp_hum}>
      <div className={styles.double_row_display}>
        <h2 className={styles.grid_item}><b>{day || 'Día'}</b></h2>
        <h5 className={styles.grid_item}>{date || 'Fecha'}</h5>
      </div>
      <div className={styles.double_col_display}>
        <h4 className={styles.grid_item}><b>{maxTemp ?? 'Max'}º / {minTemp ?? 'Min'}º</b></h4> 
      </div>
      <div className={styles.grid_item}><b>Humedad: {humidity ?? 'Humedad'}%</b></div>
    </div>
  );
}

export default WeatherSummary;