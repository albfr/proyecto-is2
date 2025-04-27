import React, { useState } from 'react';
import weatherPic from "../assets/sun.png";
import "../assets/dailyRecommendationStyle.css";

function DailyRecommendation() {
  return (
    <div className="dailyRecWrapper">
      <div className="info-column">
        <img className="weather-image" src={weatherPic} alt="weather picture" />
        <div className="data-grid">
          <div className="day-date-temp-hum">
            <div className="double-row-display">
              <h2 className="grid-item"><b>Día</b></h2>
              <h5 className="grid-item">Fecha</h5>
            </div>
            <div className="double-col-display">
              <h4 className="grid-item"><b>Maxº</b></h4>
              <h5 className="grid-item">/ Minº</h5>
            </div>
            <div className="grid-item"><b>Humedad%</b></div>
          </div>
          <div className="weather-info">
            <div className="grid-item"><b>Sensaciónº: </b></div>
            <div className="grid-item"><b>índice UV: </b></div>
            <div className="grid-item"><b>Sensación en la sombraº: </b></div>
            <div className="grid-item"><b>Viento:  km/h</b></div>
          </div>  
        </div>
        <div className="healthcare">
          <p>
            Recomendaciones de cuidado general respecto al clima.
          </p>
        </div>
      </div>
      <div className="recommendation-column">
        <h1 className="recommendation-title">Actividades Recomendadas</h1>
        <div className="recommendation-rect">
          <p>
          Recomendaciones de actividades basadas en usuarios + personalizaciones
          de usuario.
          </p>
        </div>
        <div className="recommendation-buttons">
          <div className="radio-button">
            <input  type="radio" name="rec_page" id="page1"></input>
            <div className="radio-tile" />
          </div>

          <div className="radio-button">
            <input  type="radio" name="rec_page" id="page2"></input>
            <div className="radio-tile" />
          </div>
            
          <div className="radio-button">
            <input  type="radio" name="rec_page" id="page3"></input>
            <div className="radio-tile" />
          </div>

          <div className="radio-button">
            <input  type="radio" name="rec_page" id="page4"></input>
            <div className="radio-tile" />
          </div>

          <div className="radio-button">
            <input  type="radio" name="rec_page" id="page5"></input>
            <div className="radio-tile" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default DailyRecommendation;