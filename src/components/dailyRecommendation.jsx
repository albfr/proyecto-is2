import React, { useState } from 'react';
import WeatherImage from './weatherImage';
import WeatherSummary from './weatherSummary';
import WeatherDetails from './weatherDetails';
import HealthCareTips from './healthcareTips';
import ActivityRecommendation from './activityRecommendation';
import RecommendationPagination from './paginationRecommendation';

import weatherPic from '../assets/sun.png';
import '../styles/dailyRecommendationStyle.module.css';

function DailyRecommendation() {
  const [currentRecommendationPage, setCurrentRecommendationPage] = useState(1);
  const totalRecommendationPages = 5;   //<--- This should be dynamic through uhh fetching? Just using five as an example lolol

  //Example!!! Fetch or define weather data!!!
  const [weatherData, setWeatherData] = useState({
    day: 'Lunes',
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
    imageSrc: weatherPic,
    imageAlt: 'Sol brillante'
  });

  //Handlers
  const handlePageChange = (pageNumber) => {
    setCurrentRecommendationPage(pageNumber);
     setWeatherData(prevData => ({
      ...prevData,
      activityText: `Página ${pageNumber}. test`
    }));
  };

  return (
    <div className="dailyRecWrapper">
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
