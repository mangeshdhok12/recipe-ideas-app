# Recipe Ideas App

The Recipe Ideas App is a React-based application designed to help users quickly find recipes based on ingredients they have on hand. Created for a busy professional user persona (Taylor), the app allows users to search for recipes by entering keywords, displays relevant recipe options, and provides an intuitive, responsive interface for ease of use. This application fetches recipe data from [TheMealDB API](https://www.themealdb.com/), focusing on simplicity and a user-friendly experience.

## Table of Contents
- [Features](#features)
- [User Persona](#user-persona)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [File Structure](#file-structure)
- [Styling](#styling)
- [Additional Notes](#additional-notes)

## Features
- **Ingredient-Based Search**: Users can enter ingredients to find related recipes.
- **Recipe Display**: Displays a list of recipes with images and titles for easy browsing.
- **Clear and Responsive UI**: A clean, welcoming interface that is responsive across desktop and mobile devices.
- **Loading Skeletons**: Shows placeholder cards while data is loading to improve user experience.
- **Error Handling**: Displays friendly error messages if no recipes are found or if there's a network issue.

## User Persona
- **Name**: Taylor
- **Occupation**: Busy Professional
- **Needs**: Taylor wants a quick way to find recipes based on ingredients he has, allowing him to decide what to cook depending on his mood or available ingredients.

## Technology Stack
- **Framework**: React(vite project)
- **Styling**: Plain CSS
- **State Management**: React's built-in state management with hooks
- **Data Fetching**: Public API (TheMealDB API)

## Installation

To run the application locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/mangeshdhok12/recipe-ideas-app.git
   cd recipe-ideas-app

2. Install dependencies:
 npm install

3. Start Application.
npm run dev

4. Open your browser and visit http://localhost:5173

*Usage

1. Enter an ingredient or recipe name in the search bar.

2. Click the Search button to fetch recipes.

3. The app will display recipe cards with images and names of matching recipes.

4. Added the functionality "add to Favorites". Taylor can add the dish to favorites tab and can see the dish in saperate section.

5. Also he can remove the dish from Favorite Dishes tab.

6.. Click the Clear button to reset the search input and results.

## Component Overview

1. App:

• Role: Serves as the main container for the app's functionality and state management.

• Responsibilities:
Manages the state for searchTerm, recipes, error, and loading.
Contains key functions:
fetchRecipes: Fetches recipes from the API based on the user's search term.
clearSearch: Resets the search input and clears results.
Coordinates data flow between child components (like SearchInput and RecipeList) and manages conditional rendering for loading, error, and recipe display.

2. SearchInput:

• Role: Provides a user interface for entering a search term and initiating or clearing the search.

• Responsibilities:
Renders an input field where users type an ingredient or recipe name.
Has "Search" and "Clear" buttons to trigger recipe search or reset the input.
Calls fetchRecipes from App on clicking "Search" and clearSearch when "Clear" is pressed, keeping the input interactions modular.

3. RecipeList:

• Role: Displays a list of recipes in the form of recipe cards.

• Responsibilities:
Maps through the recipes array and renders each recipe as a RecipeCard.
Acts as a wrapper component to organize and structure how individual recipe cards are shown, ensuring a clean and cohesive display of results.

4. RecipeCard:

• Role: Renders individual recipe information in a card format.

• Responsibilities:
Displays a recipe image and title based on the recipe data passed from RecipeList.
Creates a visually consistent and user-friendly representation for each recipe, making it easy for users to browse through options.

5. SkeletonRecipeCard:

• Role: Provides a loading placeholder that appears while the app fetches recipe data.

• Responsibilities:
Mimics the appearance of a RecipeCard with greyed-out elements to show users that content is loading.
Improves user experience by offering visual feedback during data fetch, making the app feel more responsive and polished.

## Overview of application
This structured approach keeps the application modular, making each part easy to understand, test, and maintain. The design also ensures a user-friendly interface, focusing on quick access to recipe information and responsive interactions.