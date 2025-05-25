import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Task4 from './Task4';

const App4 = () => {
  // Updated recipe data
  const recipes = [
    {
      id: 1,
      title: 'Biryani',
      imageUrl: 'https://th.bing.com/th/id/OIP.M5P3yI6QSzcItNnqOMVz4gHaLG?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      ingredients: ['rice', 'chicken', 'onion', 'garlic', 'spices', 'yogurt'],
      instructions: 'Cook the rice, prepare the chicken with spices, mix together and serve.'
    },
    {
      id: 2,
      title: 'Parotta',
      imageUrl: 'https://th.bing.com/th/id/OIP.acn7d-KXdprjOGCfwJ-3gwHaLG?w=118&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      ingredients: ['flour', 'water', 'salt', 'oil'],
      instructions: 'Knead the dough, roll it out, cook on a flat pan with oil until crispy.'
    },
    {
      id: 3,
      title: 'Fish Curry',
      imageUrl: 'https://th.bing.com/th/id/OIP.y3Armb5m1-TXH-hqe3_c6AHaLH?w=147&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      ingredients: ['fish', 'coconut milk', 'tomato', 'onion', 'spices'],
      instructions: 'Cook the fish with onions and tomatoes, add coconut milk, and simmer.'
    },
  ];

  return (
    <Router>
      <div className="app-container">
        <h1 className="title">Recipe Finder</h1>
        <SearchBar recipes={recipes} />
        <Routes>
          <Route path="/recipe/:id" element={<Task4 />} />
        </Routes>
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        .app-container {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 20px;
        }

        .title {
          color: #333;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .search-bar {
          margin-bottom: 30px;
        }

        .search-bar input {
          padding: 10px;
          font-size: 16px;
          margin-bottom: 20px;
          width: 60%;
          border: 2px solid #ddd;
          border-radius: 5px;
          outline: none;
        }

        .search-bar input:focus {
          border-color: #4CAF50;
        }

        .recipe-item {
          display: inline-block;
          width: 200px;
          margin: 10px;
          text-align: center;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          background-color: #f9f9f9;
        }

        .recipe-item img {
          width: 100%;
          height: auto;
          border-radius: 5px;
        }

        .recipe-item h2 {
          font-size: 18px;
          color: #333;
          margin-top: 10px;
        }

        .recipe-item a {
          text-decoration: none;
          color: inherit;
        }

        .recipe-item a:hover h2 {
          color: #4CAF50;
        }
      `}</style>
    </Router>
  );
};

const SearchBar = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {filteredRecipes.map(recipe => (
          <div className="recipe-item" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.imageUrl} alt={recipe.title} />
              <h2>{recipe.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App4;
