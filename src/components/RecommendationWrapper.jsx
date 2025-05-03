import React from 'react';
import ManualLocation from './ManualLocation';
import WeeklyRecommendations from './WeeklyRecommendations';

export default function RecommendationWrapper() {
  
  return (
    <div style={{ padding: '2rem'}}>
      <div style={{ marginBottom: '2rem' }}>
        <ManualLocation />
      </div>
      {/* <WeeklyRecommendations /> */}
    </div>
  );
}
