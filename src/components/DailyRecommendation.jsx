import React, { useState } from 'react';
import WeatherImage from './WeatherImage';
import WeatherSummary from './WeatherSummary';
import WeatherDetails from './WeatherDetails';
import HealthCareTips from './HealthcareTips';
import ActivityRecommendation from './ActivityRecommendation';
import RecommendationPagination from './PaginationRecommendation';

import styles from '@/styles/DailyRecommendation.module.css';

function DailyRecommendation( weekDay ) {
  const [currentRecommendationPage, setCurrentRecommendationPage] = useState(1);
  const totalRecommendationPages = 5;   //<--- This should be dynamic through uhh fetching? Just using five as an example lolol

  //Example!!! Fetch weather data!!!
  const [weatherData, setWeatherData] = useState({
    day: weekDay,
    date: '24/06/2024',
    maxTemp: 30,
    minTemp: 18,
    humidity: 55,
    feelsLike: 32,
    uvIndex: 8,
    shadeFeelsLike: 28,
    windSpeed: 15,
    healthTips: 'Mantente hidratado y usa protector solar',
    activityText: `Página ${currentRecommendationPage}: Correr es una buena idea :D.`,
    imageSrc: "./sun.png",
    imageAlt: 'Sol brillante'
  });

  const handlePageChange = (pageNumber) => {
    setCurrentRecommendationPage(pageNumber);
     setWeatherData(prevData => ({
      ...prevData,
      activityText: `Página ${pageNumber}. test`
    }));
  };

  return (
    <div className={styles.dailyRecWrapper}>
      <div className="info-column">
        <WeatherImage src={weatherData.imageSrc} alt={weatherData.imageAlt} />
        <div className="data-grid">
          <WeatherSummary
            day={weatherData.day}
            date={weatherData.date}
            maxTemp={weatherData.maxTemp}
            minTemp={weatherData.minTemp}
            humidity={weatherData.humidity}
          />
          <WeatherDetails
            feelsLike={weatherData.feelsLike}
            uvIndex={weatherData.uvIndex}
            shadeFeelsLike={weatherData.shadeFeelsLike}
            windSpeed={weatherData.windSpeed}
          />
        </div>
        <HealthCareTips tips={weatherData.healthTips} />
      </div>

      <div className="recommendation-column">
        <h1 className="recommendation-title">Actividades Recomendadas</h1>
        <ActivityRecommendation text={weatherData.activityText} />
        <RecommendationPagination
          totalPages={totalRecommendationPages}
          currentPage={currentRecommendationPage}
          onPageChange={handlePageChange}
          name="recommendation-page-selector"
        />
      </div>
    </div>
  );
}

export default DailyRecommendation;
