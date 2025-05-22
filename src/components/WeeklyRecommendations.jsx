import React, { useState, useEffect } from 'react';
import DailyRecommendation from './DailyRecommendation';
import WeekdaySelector from './WeekDaySelector';

import styles from '@/styles/WeeklyRecommendation.module.css';

const DAYS_OF_WEEK = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const getDayNameFromDate = (dateString) => {
  const date = new Date(dateString + 'T00:00:00');
  const dayIndex = date.getDay(); 
  const adjustedIndex = (dayIndex + 6) % 7;
  return DAYS_OF_WEEK[adjustedIndex];
};

function WeeklyRecommendations({ recs }) {
  const [currentDayName, setCurrentDayName] = useState('');
  const [selectedDayData, setSelectedDayData] = useState(null);

  useEffect(() => {
    if (recs && recs.length > 0) {
      const todayObj = new Date();
    const todayDayIndex = (todayObj.getDay() + 6) % 7; // Monday = 0
    const actualTodayName = DAYS_OF_WEEK[todayDayIndex];
    console.log("Actual today is:", actualTodayName); // For debugging

    // Try to find data for actualTodayName
    let dataForToday = recs.find(r => getDayNameFromDate(r.day) === actualTodayName);

    if (dataForToday) {
      // console.log("Found data for actual today:", actualTodayName, dataForToday); // For debugging
      setCurrentDayName(actualTodayName); // <--- `currentDayName` is SET HERE
      setSelectedDayData(dataForToday);
    } else {
      // If no data for today, default to the first day in recs
      const firstDayNameInRecs = getDayNameFromDate(recs[0].day);
      // console.warn(`No data for ${actualTodayName}. Defaulting to ${firstDayNameInRecs}`); // For debugging
      setCurrentDayName(firstDayNameInRecs); // <--- `currentDayName` is SET HERE
      setSelectedDayData(recs[0]);
    }
  } else {
    setCurrentDayName(''); // <--- `currentDayName` is SET HERE (to empty if no recs)
    setSelectedDayData(null);
    // console.log("No recs or empty recs."); // For debugging
  }
}, [recs]);

  const handleDayChange = (newDayName) => {
    setCurrentDayName(newDayName);
    if (recs) {
      const newSelectedData = recs.find(r => getDayNameFromDate(r.day) === newDayName);
      setSelectedDayData(newSelectedData || null);
    }
  };

  return (
    <div className={styles.weekly_wrapper}>
      <p>
        Selected Day: <strong>{currentDayName || 'None'}</strong>
      </p>
      <WeekdaySelector selectedDay={currentDayName} onDayChange={handleDayChange} />

      {selectedDayData ? (
        <DailyRecommendation
          key={selectedDayData.day} 
          weekDayName={currentDayName} 
          dayData={selectedDayData}  
        />
      ) : (
        currentDayName && <p>No existen recomendaciones para el día {currentDayName}.</p>
      )}
    </div>
  );
}

export default WeeklyRecommendations;