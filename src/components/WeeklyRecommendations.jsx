import React, { useState, useEffect } from 'react';
import DailyRecommendation from './DailyRecommendation';
import WeekdaySelector from './WeekDaySelector';

import styles from '@/styles/WeeklyRecommendation.module.css';

const DAYS_OF_WEEK = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function WeeklyRecommendations(recs) {
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const todayIndex = new Date().getDay(); // Sunday is 0
    const adjustedIndex = (todayIndex + 6) % 7; // Shift so Monday = 0
    setCurrentDay(DAYS_OF_WEEK[adjustedIndex]);
  }, []);

  const handleDayChange = (newDay) => {
    setCurrentDay(newDay);
  };

  return (
    <div className={styles.weekly_wrapper}>
      <p>
        Selected Day: <strong>{currentDay || 'None'}</strong>
      </p>
      <WeekdaySelector selectedDay={currentDay} onDayChange={handleDayChange} />
      <DailyRecommendation weekDay={currentDay} />
    </div>
  );
}

export default WeeklyRecommendations;
