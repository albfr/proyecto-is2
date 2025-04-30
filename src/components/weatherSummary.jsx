import React from 'react';

function WeatherSummary({ day, date, maxTemp, minTemp, humidity }) {    //Receives specific weather data points via props.
  return (
    <div className="day-date-temp-hum">
      <div className="double-row-display">
        <h2 className="grid-item"><b>{day || 'Día'}</b></h2>
        <h5 className="grid-item">{date || 'Fecha'}</h5>
      </div>
      <div className="double-col-display">
        <h4 className="grid-item"><b>{maxTemp ?? 'Max'}º</b></h4> {/* Use ?? for defaults */}
        <h5 className="grid-item">/ {minTemp ?? 'Min'}º</h5>
      </div>
      <div className="grid-item"><b>{humidity ?? 'Humedad'}%</b></div>
    </div>
  );
}

export default WeatherSummary;