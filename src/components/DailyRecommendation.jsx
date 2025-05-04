import React, { useState } from 'react';
import WeatherImage from './WeatherImage';
import WeatherSummary from './WeatherSummary';
import WeatherDetails from './WeatherDetails';
import HealthCareTips from './HealthcareTips';
import ActivityRecommendation from './ActivityRecommendation';
import RecommendationPagination from './PaginationRecommendation';

import styles from '@/styles/DailyRecommendation.module.css';

function DailyRecommendation( {weekDay, recs} ) {
  const [currentRecommendationPage, setCurrentRecommendationPage] = useState(1);
  const totalRecommendationPages = recs.recommendations.length;   //<--- This should be dynamic through uhh fetching? Just using five as an example lolol

  //Example!!! Fetch weather data!!!
  console.log(weekDay, recs);
  // const weatherData = {
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
  // const weatherData = recs;
  console.log("weatherData", weatherData);
  console.log("hola", recs);

  const handlePageChange = (pageNumber) => {
    setCurrentRecommendationPage(pageNumber);
     setWeatherData(prevData => ({
      ...prevData,
      activityText: `${recs.recommendations[pageNumber-1].name}`
    }));
    console.log(pageNumber);
  };
  // console.log(handlePageChange);

  return (
    <div className={styles.dailyRecWrapper}>
      <div className={styles.info_column}>
        <WeatherImage src={weatherData.imageSrc} alt={weatherData.imageAlt} />
        <div className={styles.data_grid}>
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

      <div className={styles.recommendation_column}>
        <h1 className={styles.recommendation_title}>Actividades Recomendadas</h1>
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
