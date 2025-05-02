import React, { useState } from 'react';
import DailyRecommendation from "./dailyRecommendation";
import WeekdaySelector from './weekDaySelector';

import '../styles/styles.css';

function WeeklyRecommendations(){
    const [currentDay, setCurrentDay] = useState('Lunes')
    
    const handleDayChange = (newDay) => {
        console.log("Selected day:", newDay);
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
