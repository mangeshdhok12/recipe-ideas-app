
import React from 'react';
import './SkeletonRecipeCard.css';

const SkeletonRecipeCard = () => {

//This is the dummy skeleton which will show visual indication while actual recipe data is being fetched. 

  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text"></div>
    </div>
  );
};

export default SkeletonRecipeCard;
