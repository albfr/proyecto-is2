import React, { useState, useEffect } from 'react';
import WeatherImage from './WeatherImage';
import WeatherSummary from './WeatherSummary';
import WeatherDetails from './WeatherDetails';
import HealthCareTips from './HealthcareTips';
import ActivityRecommendation from './ActivityRecommendation';
//import RecommendationPagination from './PaginationRecommendation';

import styles from '@/styles/home/DailyRecommendation.module.css';

const formatDate = (dateString) => {
  if (!dateString) return '';
  try {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  } catch (error) {
    console.warn("Could not format date:", dateString);
    return dateString; 
  }
};

function DailyRecommendation({ weekDayName, dayData }) {
  if (!dayData) {
    return <p>Cargando datos diarios...</p>;
  }

  const {
    day: dateApiString,
    maxtemp_c,
    mintemp_c,
    avghumidity,
    feelsLike,
    avgtemp_c,
    uv,
    shadeFeelsLike,
    maxwind_kph,
    recommendations
  } = dayData;
  const totalRecommendations = recommendations ? recommendations.length : 0;

  recommendations.sort((a, b) => {
    return(a.similarity < b.similarity);
  })
  let selectedRecommendations = recommendations.slice(0, Math.min(5, totalRecommendations));

  let activityRecommendations = [];
  if (selectedRecommendations) {
    activityRecommendations = selectedRecommendations.map(recommendation => {
      return(
        <ActivityRecommendation
          text={recommendation.name}
          similarity={recommendation.similarity}
        />
      )
    })
  }

  const healthTips = 'Mantente hidratado y usa protector solar. Considera las condiciones al planificar.';  //Placeholder
  const imageSrc = "./sun.png"; //Placeholder
  const imageAlt = 'Representación del clima';

  return (
    <div className={styles.dailyRecWrapper}>
      <div className={styles.info_column}>
        <WeatherImage src={imageSrc} alt={imageAlt} />
        <div className={styles.data_grid}>
          <WeatherSummary
            day={weekDayName}
            date={formatDate(dateApiString)}
            maxTemp={maxtemp_c}
            minTemp={mintemp_c}
            humidity={avghumidity}
          />
          <WeatherDetails
            feelsLike={Math.round((6.105*avghumidity/100)*(Math.exp(17.27*avgtemp_c/(237.7+avgtemp_c)))*100)/100}
            uvIndex={uv}
            shadeFeelsLike={(Math.round((6.105*avghumidity/100)*(Math.exp(17.27*avgtemp_c/(237.7+avgtemp_c)))*100)/100)-2}
            windSpeed={maxwind_kph}
          />
        </div>
        <HealthCareTips tips={healthTips} />
      </div>

      <div className={styles.recommendation_column}>
        <h1 className={styles.recommendation_title}>Actividades Recomendadas</h1>
        {totalRecommendations > 0 && activityRecommendations}
        {totalRecommendations == 0 && 
          <p>No existen recomendaciones disponibles en este momento!</p>
        }
      </div>
    </div>
  );
}

export default DailyRecommendation;