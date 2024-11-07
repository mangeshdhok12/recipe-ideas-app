
import React from 'react';

const RecipeCard = ({ recipe }) => {

// In this component we are displaying details of single recipe which includes image and title.

  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
      <h3 className="recipe-title">{recipe.strMeal}</h3>
    </div>
  );
};

export default RecipeCard;
