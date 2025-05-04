import React from 'react';
import DayButton from './DayButton';
import styles from '@/styles/WeekDaySelector.module.css';

const DAYS_OF_WEEK = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function WeekdaySelector({ selectedDay, onDayChange }) {
  const currentDay = new Date();
  
  const today = DAYS_OF_WEEK[(currentDay.getDay() + 5 ) % 7];
  const tomorrow = DAYS_OF_WEEK[currentDay.getDay() % 7];
  const dayAfterTomorrow = DAYS_OF_WEEK[(currentDay.getDay() + 1) % 7];

  // Create an array describing the three buttons we want to render
  const daysToDisplay = [
    {
      display: 'Hoy',             // Text to show on the button
      actualDay: today, // The real day name this button represents
    },
    {
      display: tomorrow,
      actualDay: tomorrow,
    },
    {
      display: dayAfterTomorrow,
      actualDay: dayAfterTomorrow,
    },
  ];

  return (
    <div className={styles.weekday_selector}>
      {daysToDisplay.map((dayInfo) => (
        <DayButton key={dayInfo.actualDay}
          day={dayInfo.display}
          isSelected={selectedDay === dayInfo.actualDay}
          onClick={() => onDayChange(dayInfo.actualDay)}
        />
      ))}
    </div>
  );
}

export default WeekdaySelector;