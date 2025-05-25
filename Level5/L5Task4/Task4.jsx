import React from 'react';
import { useParams } from 'react-router-dom';

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

const Task4 = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div className="task-container">
      <h1>{recipe.title}</h1>
      <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
      <h2>Ingredients:</h2>
      <ul className="ingredients-list">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <p>{recipe.instructions}</p>

      
      <style>
        {`
          .task-container {
            font-family: Arial, sans-serif;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
          }

          h1 {
            color: #4CAF50;
            font-size: 2rem;
            margin-bottom: 15px;
          }

          .recipe-image {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 20px;
          }

          h2 {
            color: #333;
            font-size: 1.5rem;
            margin-top: 20px;
          }

          .ingredients-list {
            list-style-type: none;
            padding-left: 0;
            font-size: 1.1rem;
            text-align: left;
            color: #555;
          }

          .ingredients-list li {
            padding: 5px 0;
          }

          p {
            font-size: 1.1rem;
            color: #666;
            line-height: 1.6;
          }
        `}
      </style>
    </div>
  );
};

export default Task4;
