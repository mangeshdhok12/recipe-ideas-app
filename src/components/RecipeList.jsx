
import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, toggleFavorite, favorites = [] }) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.idMeal === recipe.idMeal)} // Check if the recipe is in the favorites list
          />
        ))
      )}
    </div>
  );
};

export default RecipeList;
