import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const cached = localStorage.getItem('popular');

        if (cached && cached !== 'undefined') {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed)) {
            setRecipes(parsed);
            return;
          }
        }

        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=2b0b491aa44947ca802520c4ffafb5b6&number=12&tags=vegetarian`
        );
        const data = await res.json();

        if (data.recipes) {
          localStorage.setItem('popular', JSON.stringify(data.recipes));
          setRecipes(data.recipes);
        }
      } catch (error) {
        console.error('Error fetching popular recipes:', error);
        localStorage.removeItem('popular');
      }
    };

    fetchPopular();
  }, []);

  return (
    <>
      <style>
        {`
          .home-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1.5rem;
          }

          @media (min-width: 640px) {
            .home-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .home-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .recipe-card {
            background-color: #fff;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .recipe-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }

          .recipe-image {
            width: 100%;
            height: 12rem;
            object-fit: cover;
          }

          .recipe-title {
            padding: 1rem;
            font-size: 1.125rem;
            font-weight: 600;
            text-align: center;
            color: #2d3748;
          }
        `}
      </style>

      <div className="home-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <h4 className="recipe-title">{recipe.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
