import React from 'react';
import styles from '@/styles/WeatherSummary.module.css'

function WeatherSummary({ day, date, maxTemp, minTemp, humidity }) {    //Receives specific weather data points via props.
  return (
    <div className={styles.day_date_temp_hum}>
      <div className={styles.double_row_display}>
        <h2 className="grid-item"><b>{day.weekday || 'Día'}</b></h2>
        <h5 className="grid-item">{date || 'Fecha'}</h5>
      </div>
      <div className={styles.double_col_display}>
        <h4 className="grid-item"><b>{maxTemp ?? 'Max'}º</b></h4> 
        <h5 className="grid-item">/ {minTemp ?? 'Min'}º</h5>
      </div>
      <div className="grid-item"><b>{humidity ?? 'Humedad'}%</b></div>
    </div>
  );
}

export default WeatherSummary;