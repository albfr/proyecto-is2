import React from 'react';
import '@/styles/DayButton.module.css'

function DayButton({ day, isSelected, onClick }) {
  const buttonClassName = `day_button ${isSelected ? 'selected' : ''}`;
  return (
    <button
      type="button" className={buttonClassName} onClick={() => onClick(day)}>
      {day}
    </button>
  );
}

export default DayButton;