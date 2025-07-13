import React from 'react'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AddRecipe from './pages/AddRecipe'
import RecipeDetails from './pages/RecipeDetails'

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<RecipeDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-recipe' element={<AddRecipe />} />
      </Routes>
    </AuthProvider>
  )
}

export default App