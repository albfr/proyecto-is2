import React from 'react';
import ManualLocation from './manualLocation';
import WeeklyRecommendations from './weeklyRecommendations';

function recommendationWrapper() {
  return (
    <div style={{ padding: '2rem' }}>
      <ManualLocation />
      <WeeklyRecommendations />
    </div>
  );
}

export default recommendationWrapper;
