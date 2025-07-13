import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/recipes/${id}`);
        setRecipe(res.data);
      } catch (err) {
        setError('❌ Failed to load recipe details.');
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this recipe? This action cannot be undone.')) {
      return;
    }
    setDeleting(true);
    setDeleteError(null);
    try {
      await axios.delete(`/api/recipes/${id}`);
      // Redirect to recipe list or home page after deletion
      navigate('/recipes');
    } catch (err) {
      setDeleteError('❌ Failed to delete recipe. Please try again.');
    } finally {
      setDeleting(false);
    }
  };

  if (loading)
    return <div className="text-center mt-10 text-lg text-white">Loading...</div>;

  if (error)
    return <div className="text-center mt-10 text-red-200 font-semibold">{error}</div>;

  if (!recipe)
    return <div className="text-center mt-10 text-white">Recipe not found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 flex flex-col items-center py-10 px-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-8">
        {recipe.photoUrl && (
          <img
            src={recipe.photoUrl}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-lg mb-6 shadow-sm"
          />
        )}

        <h1 className="text-3xl font-extrabold mb-3 text-purple-900 capitalize">{recipe.title}</h1>

        <div className="flex flex-wrap gap-3 mb-5 text-sm text-gray-700">
          <span className="bg-yellow-300 text-gray-800 px-3 py-1 rounded-full font-medium shadow-sm">
            {recipe.category}
          </span>
          <span className="bg-purple-300 text-purple-900 px-3 py-1 rounded-full font-medium shadow-sm">
            ⏱ {recipe.cookingTime} min
          </span>
        </div>

        <h2 className="text-xl font-semibold text-purple-800 mt-4 mb-2">🧂 Ingredients</h2>
        <ul className="list-disc list-inside text-gray-800 mb-6">
          {Array.isArray(recipe.ingredients) ? (
            recipe.ingredients.map((ing, idx) => (
              <li key={idx} className="capitalize">{ing}</li>
            ))
          ) : (
            <li className="capitalize">{recipe.ingredients}</li>
          )}
        </ul>

        <h2 className="text-xl font-semibold text-purple-800 mt-4 mb-2">👩‍🍳 Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-800">
          {Array.isArray(recipe.instructions) ? (
            recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))
          ) : (
            <li>{recipe.instructions}</li>
          )}
        </ol>

        {/* Delete Button (show only if user is owner in real app) */}
        <div className="mt-8 flex flex-col items-center">
          {deleteError && (
            <div className="mb-3 text-red-500 font-semibold">{deleteError}</div>
          )}
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded shadow transition disabled:opacity-50"
          >
            {deleting ? 'Deleting...' : 'Delete Recipe'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;