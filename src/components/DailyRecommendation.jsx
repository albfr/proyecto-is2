import React, { useState, useEffect } from 'react';
import WeatherImage from './WeatherImage';
import WeatherSummary from './WeatherSummary';
import WeatherDetails from './WeatherDetails';
import HealthCareTips from './HealthcareTips';
import ActivityRecommendation from './ActivityRecommendation';
import RecommendationPagination from './PaginationRecommendation';

import styles from '@/styles/DailyRecommendation.module.css';

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
  const [currentRecommendationPage, setCurrentRecommendationPage] = useState(1);

  useEffect(() => {
    setCurrentRecommendationPage(1);
  }, [dayData]);

  const {
    day: dateApiString,
    maxTemp,
    minTemp,
    humidity,
    feelsLike,
    uvIndex,
    shadeFeelsLike,
    windSpeed,
    recommendations
  } = dayData;

  const totalRecommendationPages = recommendations ? recommendations.length : 0;

  const handlePageChange = (pageNumber) => {
    setCurrentRecommendationPage(pageNumber);
  };

  let currentActivityText = "No activities recommended for this day.";
  if (recommendations && recommendations.length > 0 && currentRecommendationPage > 0 && currentRecommendationPage <= recommendations.length) {
    currentActivityText = recommendations[currentRecommendationPage - 1].name;
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
            maxTemp={maxTemp}
            minTemp={minTemp}
            humidity={humidity}
          />
          <WeatherDetails
            feelsLike={feelsLike}
            uvIndex={uvIndex}
            shadeFeelsLike={shadeFeelsLike}
            windSpeed={windSpeed}
          />
        </div>
        <HealthCareTips tips={healthTips} />
      </div>

      <div className={styles.recommendation_column}>
        <h1 className={styles.recommendation_title}>Actividades Recomendadas</h1>
        <ActivityRecommendation text={currentActivityText} />
        {totalRecommendationPages > 0 && (
          <RecommendationPagination
            totalPages={totalRecommendationPages}
            currentPage={currentRecommendationPage}
            onPageChange={handlePageChange}
            name="recommendation-page-selector"
          />
        )}
      </div>
    </div>
  );
}

export default DailyRecommendation;