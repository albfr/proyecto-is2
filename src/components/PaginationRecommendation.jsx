import React from 'react';
import PaginationDot from './PaginationDot';
import styles from '@/styles/PaginationRecommendation.module.css'

function RecommendationPagination({ totalPages, currentPage, onPageChange, name = "rec_page" }) { 
  // ^^ Receives total number of pages, current page, and a handler for page changes
  const dots = [];
  for (let i = 1; i <= totalPages; i++) {
    dots.push(
      <PaginationDot
        key={`${name}-${i}`}
        id={`${name}-${i}`}
        name={name}
        value={i}
        checked={currentPage === i}
        onChange={() => onPageChange(i)}
      />
    );
  }

  return (
    <div className={styles.recommendation_buttons}>
      {dots}
    </div>
  );
}

export default RecommendationPagination;