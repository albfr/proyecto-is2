import React from 'react';

function DayButton({ day, isSelected, onClick }) {
  const buttonClassName = `day-button ${isSelected ? 'selected' : ''}`;
  return (
    <button
      type="button" className={buttonClassName} onClick={() => onClick(day)}>
      {day}
    </button>
  );
}

export default DayButton;