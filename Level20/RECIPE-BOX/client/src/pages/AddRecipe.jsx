import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import  { useNavigate } from 'react-router-dom'

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: [""],
    instructions: "",
    category: "",
    photoUrl: "",
    cookingTime: ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients]
    newIngredients[index] = value
    handleInputChange("ingredients", newIngredients)
    const lastIngredient = formData.ingredients[formData.ingredients.length - 1]
    if (error && lastIngredient.trim() !== "") {
      setError('')
    }
  }
  const addIngredient = () => {
    const lastIngredient = formData.ingredients[formData.ingredients.length - 1]
    if (lastIngredient.trim() !== "") {
      setError('')
      handleInputChange("ingredients", [...formData.ingredients, ""])
    } else {
      setError("Fill the ingredient before adding new one")
    }
  }

  const removeIngredient = (index) => {
    if (formData.ingredients.length > 1) {
      const newIngredients = formData.ingredients.filter((_, i) => i !== index)
      handleInputChange("ingredients", newIngredients)
      const lastIngredient =
        formData.ingredients[formData.ingredients.length - 1]
      if (error && lastIngredient.trim() !== "") {
        setError("")
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await axios.post('/api/recipes', {
        title: formData.title,
        ingredients: formData.ingredients.filter((i) => i.trim() !== ""),
        instructions: formData.instructions.trim(),
        category: formData.category,
        cookingTime: formData.cookingTime ? Number(formData.cookingTime) : undefined,
        photoUrl: formData.photoUrl
      });
      navigate("/");
    } catch (error) {
      setError("Failed to add recipe");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='max-w-2xl mx-auto p-4 '>
      <div className="flex justify-center mb-6">
        <span className="text-xl font-semibold">Add Recipe</span>
        <span role="img" aria-label="Pizza" className="text-3xl mr-2">🍕</span>
      </div>
      <form onSubmit={handleSubmit} className='space-y-4' >
        <div>
          <label className=" block text-xl font-semibold text-gray-900">Title</label>
          <input
            type='text'
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className='w-full p-2 border rounded'
            required
          />
        </div>

        <div>
          <label className=" block text-xl font-semibold text-gray-900">Ingredients</label>
          {formData.ingredients.map((ingredient, index) => (
            <div key={index}>

              <input type='text' value={ingredient} onChange={(e) =>
                handleIngredientChange(index, e.target.value)}
                placeholder={`Ingredient ${index + 1}`}
                className='w-full p-2 border rounded'
                required />

              {formData.ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  className='ml-2 text-red-500 hover:text-red-700'>Remove</button>
              )}
            </div>
          ))}
          <button className='text-purple-700 hover:underline font-bold'
            type="button"
            onClick={addIngredient}
          >Add Ingredient</button>
        </div>

        <div>
          <label className=" block text-xl font-semibold text-gray-900">Instructions</label>
          <textarea
            type='text'
            value={formData.instructions}
            onChange={(e) => handleInputChange("instructions", e.target.value)}
            className='w-full p-2 border rounded'
            required
          />
        </div>

          <div>
          <label className=" block text-xl font-semibold text-gray-900">Category</label>
        <select onChange={(e) => handleInputChange("category",e.target.value)}
          value={formData.category} 
          className='w-full p-2 border rounded' 
          required>
            <option value="" disabled>
              Select category
            </option>
             <option value="breakfast">Breakfast</option>
  <option value="lunch">Lunch</option>
  <option value="dinner">Dinner</option>
  <option value="dessert">Dessert</option>
  <option value="snack">Snack</option>
  <option value="beverage">Beverage</option>
  <option value="appetizer">Appetizer</option>
  <option value="salad">Salad</option>
  <option value="soup">Soup</option>
  <option value="main-course">Main Course</option>
  <option value="side-dish">Side Dish</option>
            </select>
        </div>
        <div>
           <label className=" block text-xl font-semibold text-gray-900">Cooking Time(minutes)</label>
          <input
            type='number'
            value={formData.cookingTime}
            onChange={(e) => handleInputChange("cookingTime", e.target.value)}
            className='w-full p-2 border rounded'
            placeholder='e.g., 30'
            required
            min={0}
          />
        </div>
        <div>
           <label className=" block text-xl font-semibold text-gray-900">Photo Url</label>
          <input
            type='text'
            value={formData.photoUrl}
            onChange={(e) => handleInputChange("photoUrl", e.target.value)}
            className='w-full p-2 border rounded'
            placeholder='Url'
            required
          />
        </div>
        <button className={`bg-purple-700 text-white p-2 rounded hover:bg-purple-900 ${loading ? "opacity-50 cursor-not-allowed" : ""}` } 
        disabled={loading}
        type='submit'>
          {loading ? "Adding..." : "Add Recipe"}
        </button>
      </form>
    </div>
  )
}

export default AddRecipe