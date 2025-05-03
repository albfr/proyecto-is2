import React from 'react';
import ManualLocation from '@/components/ManualLocation';
import WeeklyRecommendations from '@/components/WeeklyRecommendations';
import styles from '@/styles/RecommendationWrapper.module.css';

export default function RecommendationWrapper() {
  
  return (
    <div className={styles.recWrap}>
      <div style={{ marginBottom: '2rem' }}>
        <ManualLocation />
      </div>
      {/* <WeeklyRecommendations /> */}
    </div>
  );
}
