import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import RecipeList from './components/RecipeList';
import SkeletonRecipeCard from './components/SkeletonRecipeCard';
import './App.css';

function App() {
  // State hooks to manage search term, recipes, favorites, error, loading state, and showing favorites
  const [searchTerm, setSearchTerm] = useState('');        // The search term entered by the user
  const [recipes, setRecipes] = useState([]);              // List of recipes fetched based on the search term
  const [favorites, setFavorites] = useState([]);          // List of user’s favorite recipes
  const [error, setError] = useState('');                  // Error message if fetching fails
  const [loading, setLoading] = useState(false);           // Loading state while fetching recipes
  const [showFavorites, setShowFavorites] = useState(false);  // Toggle between showing all recipes or only favorites

  // Fetch recipes from an external API based on the search term
  const fetchRecipes = async () => {
    if (!searchTerm.trim()) return;  // Prevent fetching if search term is empty or just spaces

    setLoading(true);    // Set loading state to true when API call starts
    setError('');        // Reset any previous error
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();

      // If meals are found, set them in the state, otherwise set an error
      if (data.meals) {
        setRecipes(data.meals);
        setError('');   // Clear any existing error
      } else {
        setRecipes([]);
        setError('No recipes found for the specified search term.');
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Unable to fetch recipes. Please try again later.');
    } finally {
      setLoading(false);  // Set loading state to false once fetching is complete
    }
  };

  // Clears the search input and resets the displayed recipes and error message
  const clearSearch = () => {
    setSearchTerm('');  // Clear the search term
    setRecipes([]);     // Clear the recipes list
    setError('');       // Clear any existing error
  };

  // Toggles a recipe between favorite and non-favorite
  const toggleFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      // Check if the recipe is already a favorite
      const isFavorite = prevFavorites.some((fav) => fav.idMeal === recipe.idMeal);
      if (isFavorite) {
        // If already a favorite, remove it
        return prevFavorites.filter((fav) => fav.idMeal !== recipe.idMeal);
      } else {
        // If not a favorite, add it
        return [...prevFavorites, recipe];
      }
    });
  };

  // Toggles the display between all recipes and just favorite recipes
  const toggleShowFavorites = () => {
    setShowFavorites((prevState) => !prevState);  // Toggle between favorites and regular recipes
  };

  return (
    <div className="App">
      <header className="app-header">
        <img className="app-title" src="/logo.png" alt="" />  {/* App logo */}
      
        <button 
          className="favorite-dishes-btn" 
          onClick={toggleShowFavorites}
        >
          {showFavorites ? 'Back to Recipes' : 'Favorite Dishes'}  {/* Button to toggle between showing all recipes and favorite recipes */}
        </button>
      </header>

      <p className="welcome-message">
        Welcome, Taylor! What recipe or ingredient are you interested in today?  {/* Welcome message */}
      </p>

      <SearchInput
        searchTerm={searchTerm}  // Search term state
        setSearchTerm={setSearchTerm}  // Function to update the search term
        fetchRecipes={fetchRecipes}    // Function to fetch recipes from the API
        clearSearch={clearSearch}      // Function to clear the search input
      />

      {loading ? (
        <div className="skeleton-list">
          {/* Display loading skeletons while fetching data */}
          {[...Array(6)].map((_, index) => (
            <SkeletonRecipeCard key={index} />
          ))}
        </div>
      ) : (
        <>
          {error && <p className="error-message">{error}</p>}  {/* Display error message if any */}

          {showFavorites ? (
            <div>
              <h2>Your Favorite Dishes</h2>
              {/* Display favorite recipes */}
              <RecipeList
                recipes={favorites}
                toggleFavorite={toggleFavorite}
                favorites={favorites}  // Pass the list of favorites
                showFavorites={showFavorites}  // To know that we are showing favorites
              />
            </div>
          ) : (
            <div>
              {/* Display regular recipes */}
              <RecipeList
                recipes={recipes}
                toggleFavorite={toggleFavorite}
                favorites={favorites}  // Pass the list of favorites
                showFavorites={showFavorites}  // To know that we are showing regular recipes
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
