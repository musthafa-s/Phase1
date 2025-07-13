import express from 'express';
import Recipe from '../models/Recipe.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// ✅ Create a Recipe
router.post('/', protect, async (req, res) => {
  const { title, ingredients, instructions, category, photoUrl, cookingTime } = req.body;

  try {
    if (!title || !ingredients || !instructions || !category || !photoUrl || !cookingTime) {
      return res.status(400).json({ success: false, message: "Fill in all fields" });
    }

    const recipe = await Recipe.create({
      title,
      ingredients,
      instructions,
      category,
      photoUrl,
      cookingTime,
      createdBy: req.user._id, 
    });

    res.status(201).json(recipe);
  } catch (error) {
    console.log("Error in Create recipe:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ✅ Get all recipes or by category
router.get('/', async (req, res) => {
  const { category } = req.query;

  try {
    const query = category ? { category } : {};
    const recipes = await Recipe.find(query);
    res.json(recipes);
  } catch (error) {
    console.log("Error in Fetching recipes:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ✅ Get single recipe
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    console.log("Error in Fetching recipe:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ✅ Update recipe
router.put('/:id', protect, async (req, res) => {
  const { title, ingredients, instructions, category, photoUrl, cookingTime } = req.body;

  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }

    if (recipe.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not Authorized" });
    }

    recipe.title = title || recipe.title;
    recipe.ingredients = ingredients || recipe.ingredients;
    recipe.instructions = instructions || recipe.instructions;
    recipe.category = category || recipe.category;
    recipe.photoUrl = photoUrl || recipe.photoUrl;
    recipe.cookingTime = cookingTime || recipe.cookingTime;

    const updatedRecipe = await recipe.save();
    res.json(updatedRecipe);
  } catch (error) {
    console.log("Error in Update recipe:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ✅ Delete recipe
router.delete('/:id', protect, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ success: false, message: "Recipe not found" });
    }

    if (recipe.createdBy.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not Authorized" });
    }

    await recipe.deleteOne();
    res.json({ success: true, message: "Recipe deleted successfully" });
  } catch (error) {
    console.log("Error in delete recipe:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;
