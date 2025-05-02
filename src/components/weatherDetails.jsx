import React from 'react';

function WeatherDetails({ feelsLike, uvIndex, shadeFeelsLike, windSpeed }) {
  return (
    <div className="weather-info">
      <div className="grid-item"><b>Sensaciónº: </b>{feelsLike ?? 'N/A'}</div>
      <div className="grid-item"><b>índice UV: </b>{uvIndex ?? 'N/A'}</div>
      <div className="grid-item"><b>Sensación en la sombraº: </b>{shadeFeelsLike ?? 'N/A'}</div>
      <div className="grid-item"><b>Viento: {windSpeed ?? 'N/A'} km/h</b></div>
    </div>
  );
}

export default WeatherDetails;