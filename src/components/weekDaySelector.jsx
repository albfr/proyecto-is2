import React from 'react';
import DayButton from './dayButton';

const DAYS_OF_WEEK = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
function WeekdaySelector({ selectedDay, onDayChange }) {
  return (
    <div className="weekday-selector">
      {DAYS_OF_WEEK.map((day) => (
        <DayButton
          key={day}
          day={day}
          isSelected={day === selectedDay}
          onClick={onDayChange}
        />
      ))}
    </div>
  );
}

export default WeekdaySelector;