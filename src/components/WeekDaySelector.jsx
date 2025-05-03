import React from 'react';
import DayButton from './DayButton';
import styles from '@/styles/WeekDaySelector.module.css'

const DAYS_OF_WEEK = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

function WeekdaySelector({ selectedDay, onDayChange }) {
  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = (todayIndex + 6) % 7;
  const todayDayName = DAYS_OF_WEEK[adjustedTodayIndex];

  return (
    <div className={styles.weekday_selector}>
      {DAYS_OF_WEEK.map((day, index) => (
        <DayButton
          key={day}
          day={index === adjustedTodayIndex ? 'Hoy' : day}
          isSelected={day === selectedDay}
          onClick={onDayChange}
        />
      ))}
    </div>
  );
}

export default WeekdaySelector;
