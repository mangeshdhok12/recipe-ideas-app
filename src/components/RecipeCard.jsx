import React from 'react';

function RecipeCard({ recipe, toggleFavorite, isFavorite }) {
  return (
    <div className="recipe-card">
      {/* Display the recipe image using strMealThumb */}
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
      
      {/* Display the recipe title using strMeal */}
      <div className="recipe-title">{recipe.strMeal}</div>

      {/* Button for adding/removing the recipe to/from favorites */}
      <button
        className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}  // Apply 'favorited' class if recipe is a favorite
        onClick={() => toggleFavorite(recipe)}  // Call toggleFavorite function when the button is clicked
      >
        {/* Button text changes depending on whether the recipe is a favorite */}
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default RecipeCard;
