import React, { useState } from 'react';
import DailyRecommendation from "./DailyRecommendation";
import WeekdaySelector from './WeekDaySelector';

import styles from '@/styles/WeeklyRecommendation.module.css';

function WeeklyRecommendations(){
    const [currentDay, setCurrentDay] = useState('Lunes')
    
    const handleDayChange = (newDay) => {
        setCurrentDay(newDay);
      };
    return (
        <div className={styles.weekly_wrapper}>
            <p>
                Selected Day: <strong>{currentDay || 'None'}</strong>
            </p>
            <WeekdaySelector selectedDay={currentDay} onDayChange={handleDayChange} />
            <DailyRecommendation weekDay={currentDay}/>
        </div>
    )
}

export default WeeklyRecommendations;
