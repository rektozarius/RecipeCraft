# RecipeCraft App

RecipeCraft is a multi-page web app designed for health-conscious food enthusiasts to discover ingredients, design custom recipes, and track their nutritional values. Users can search for ingredients by leveraging the [Nutritionix API](https://docx.syndigo.com/developers/docs/nutritionix-api-guide), save favorite ingredients, and assemble recipes with cooking instructions and ingredient information.

## Design

RecipeCraft mimics the color/brand palette of [Nutritionix](https://brandfetch.com/nutritionix.com).

## Usage
To run this project locally:

- Create a .env file in the project root folder and add the required APP_ID, APP_KEY.

- Start the development server by running: ```npm install``` then ```npm run dev```.

## Project Tree

```bash
¦   index.html            
+---src
    ¦   App.jsx
    ¦   index.css
    ¦   main.jsx
    ¦       
    +---common
    ¦       nutrientFacts.js
    ¦       
    +---components
    ¦       FavoriteButton.jsx
    ¦       Favorites.css
    ¦       Favorites.jsx
    ¦       Navbar.jsx
    ¦       SearchBar.jsx
    ¦       Title.css
    ¦       Title.jsx
    ¦       
    +---context
    ¦       FavoritesContext.jsx
    ¦       RecipesContext.jsx
    ¦       
    +---hooks
    ¦       useNutrients.js
    ¦       
    +---modals
    ¦       ErrorLoading.jsx
    ¦       errorLoadingStyles.js
    ¦       Ingredient.jsx
    ¦       ingredientStyles.js
    ¦       
    +---pages
    ¦       CraftRecipePage.css
    ¦       CraftRecipePage.jsx
    ¦       FavoritesPage.jsx
    ¦       HomePage.css
    ¦       HomePage.jsx
    ¦       MyRecipesPage.css
    ¦       MyRecipesPage.jsx
    ¦       RecipePage.css
    ¦       RecipePage.jsx
    ¦       
    +---utils
            cacheData.js
            transformData.js
```

## Screenshots

![Screenshot](./public/home.png?raw=true "Home Page")

![Screenshot](./public/craft_recipe.png?raw=true "Craft Recipe Page")

![Screenshot](./public/ingredient.png?raw=true "Ingredient Modal")