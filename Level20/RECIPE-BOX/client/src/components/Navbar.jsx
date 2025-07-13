import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import { useContext } from 'react'


const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  return (
    <nav className='bg-purple-500 shadow-2md p-4 '>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>
          <Link to='/'>
            <h1 className='text-2xl font-extrabold'>Recipes</h1>
            </Link>
            <div className='flex gap-x-4'>
              {user ? ( 
                <div className='flex gap-x-4'>
              <Link to='/add-recipe'>
              <button className='font-bold'>Add recipe</button>
              </Link>
                <button onClick={handleLogout} className='text-gray-800 hover:text-gray-950 font-bold'>Logout</button>
                </div>
                ) : (
                  <>
                  <Link to='/login'>
                <button className='font-bold'>Login</button>
              </Link>
              <Link to='register'>
                <button className='font-bold'>Register</button>
              </Link>
                  </>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar