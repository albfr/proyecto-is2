import React, { useState } from 'react';
import DailyRecommendation from "./DailyRecommendation";
import WeekdaySelector from './WeekDaySelector';

import '../styles/styles.module.css';

function WeeklyRecommendations(){
    const [currentDay, setCurrentDay] = useState('Lunes')
    
    const handleDayChange = (newDay) => {
        setCurrentDay(newDay);
      };
    return (
        <div className="weeklyWrapper">
            <WeekdaySelector selectedDay={currentDay} onDayChange={handleDayChange} />
            <p>
                Selected Day: <strong>{currentDay || 'None'}</strong>
            </p>
            <DailyRecommendation weekDay={currentDay}/>
        </div>
    )
}

export default WeeklyRecommendations;
