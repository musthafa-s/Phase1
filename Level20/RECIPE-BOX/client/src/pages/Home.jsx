import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState('All');

  const categories = [
    "All",
    "breakfast",
    "lunch",
    "dinner",
    "dessert",
    "snack",
    "beverage",
    "appetizer",
    "salad",
    "soup",
    "main-course",
    "side-dish"
  ];

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(`/api/recipes/${category && category !== "All" ? `?category=${category}` : ""
        }`);
      setRecipes(res.data);
    };
    fetchRecipes();
  }, [category]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center drop-shadow-md">
        Our Wonderful Food Categories
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <button
            onClick={() => setCategory(cat)}
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out shadow-md ${category === cat
                ? "bg-yellow-300 text-gray-900 font-bold scale-105"
                : "bg-white/90 text-purple-800 hover:bg-yellow-200 hover:scale-105"
              }`} >
            {cat}
          </button>
        ))}
      </div>

      {/* For Showing Recipe */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10   '>
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe._id}`} key={recipe._id}>
            <div className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg cursor-pointer'>
              {recipe.photoUrl && (
                <img
                  src={recipe.photoUrl}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
                />
              )}
              <div className='p-4'>
                <h2 className='text-xl font-semibold capitalize'>{recipe.title}</h2>
                <p className='text-gray-600'>{recipe.category}</p>
                <p className='text-gray-600'>{recipe.cookingTime} minutes</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
