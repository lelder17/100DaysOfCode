import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';

function App() {
  // this id && key comes from https://developer.edamam.com/admin/applications
  const APP_ID = 'a502f028';
  const APP_KEY = '34546f59fcf4f0a597d0637eecac7582';

  const [recipes, setRecipes] = useState([]); //create a state & set it to an empty array

  //search for something in search bar
  //create state for that search
  const [search, setSearch] = useState('');

  //create state after we click search button
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  // make async call
  //fetching all data
  const getRecipes = async () => {
    //once response comes back, await & fetch data
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    //once data comes back, take response and create json
    const data = await response.json();
    setRecipes(data.hits); //setRecipes to data.hits
    console.log(data.hits);
  };

  //create function to get event every time on change
  //setSearch from state and set it to e.target.value
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  //set setQuery state to what we have in our search when user clicks search button
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(''); //set search back to empty string
  };

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>

      <div className='recipe'>
        {/* take recipes from the API (state) & map over all the objects in array from recipes */}
        {/* use () instead of {} in map because we want to return html */}
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
