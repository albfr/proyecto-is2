import React, { useState, useEffect } from 'react';
import DailyRecommendation from './DailyRecommendation';
import WeekdaySelector from './WeekDaySelector';

import styles from '@/styles/WeeklyRecommendation.module.css';

const DAYS_OF_WEEK = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function WeeklyRecommendations({ recs }) {
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const todayIndex = new Date().getDay(); // Sunday is 0
    const adjustedIndex = (todayIndex + 6) % 7; // Shift so Monday = 0
    setCurrentDay(DAYS_OF_WEEK[adjustedIndex]);
  }, []);

  const handleDayChange = (newDay) => {
    setCurrentDay(newDay);
  };

  const todayIndex = 0;
  const tomorrowIndex = 1;
  const dayAfterTomorrow = 2;

  console.log("WeekyRecommendations.jsx", recs);
  return (
    <div className={styles.weekly_wrapper}>
      {/* <p>{recs}</p> */}
      <p>
        Selected Day: <strong>{currentDay || 'None'}</strong>
      </p>
      <WeekdaySelector selectedDay={currentDay} onDayChange={handleDayChange} />
      <DailyRecommendation weekDay={currentDay} recs={recs[todayIndex]} />
    </div>
  );
}

export default WeeklyRecommendations;
