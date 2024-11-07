
import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {

  //This displayes list of recipe cards, It maps over recipe array and renders each recipe.
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
