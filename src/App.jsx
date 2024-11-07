import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import RecipeList from './components/RecipeList';
import SkeletonRecipeCard from './components/SkeletonRecipeCard';
import './App.css';

function App() {
  // State to store the user's search term, list of recipes, error messages, and loading status
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch recipes based on the search term entered by the user
  const fetchRecipes = async () => {
    // Prevent empty searches by checking if the searchTerm is empty or contains only spaces
    if (!searchTerm.trim()) return;

    // Set loading to true to show the loading indicator and clear previous error messages
    setLoading(true);
    setError('');
    try {
      // Make an API request to fetch recipes based on the search term
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const data = await response.json();

      // If recipes are found, update the recipes state and clear any error messages
      if (data.meals) {
        setRecipes(data.meals);
        setError('');
      } else {
        // If no recipes are found, clear recipes state and display an error message
        setRecipes([]);
        setError('No recipes found for the specified search term.');
      }
    } catch (error) {
      // If there's an error with the fetch request, log it and display an error message
      console.error('Error fetching recipes:', error);
      setError('Unable to fetch recipes. Please try again later.');
    } finally {
      // Set loading to false to hide the loading indicator after the fetch completes
      setLoading(false);
    }
  };

  // Function to clear the search input, recipe list, and any error messages
  const clearSearch = () => {
    setSearchTerm('');
    setRecipes([]);
    setError('');
  };

  return (
    <div className="App">
  
      <h1 className="app-title">Recipe Ideas</h1>
      <p className="welcome-message">Welcome, Taylor! What recipe or ingredient are you interested in today?</p>
      
    
      <SearchInput 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        fetchRecipes={fetchRecipes} 
        clearSearch={clearSearch} 
      />

      {loading ? (
        
        <div className="skeleton-list">
          {[...Array(6)].map((_, index) => (
            <SkeletonRecipeCard key={index} />
          ))}
        </div>
      ) : (
        <>
         
          {error && <p className="error-message">{error}</p>}
          
          <RecipeList recipes={recipes} />
        </>
      )}
    </div>
  );
}

export default App;
