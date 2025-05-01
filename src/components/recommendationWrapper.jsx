import React from 'react';
import ManualLocation from './manualLocation';
import WeeklyRecommendations from './weeklyRecommendations';

function recommendationWrapper() {
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <ManualLocation />
      </div>
      <WeeklyRecommendations />
    </div>
  );
}

export default recommendationWrapper;
