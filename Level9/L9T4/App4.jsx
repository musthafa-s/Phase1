import React from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import PrivateRoute from './PrivateRoute'
import Dashboard from './Dashboard'
import Profile from './Profile'
import { AuthProvider } from './AuthContext'
import Home from './Home'
import Login from './Login'



const RootLayout = () => { //Root container
    return (
        <div>
            <h1>My Auth App</h1>
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element:<RootLayout />,
        errorElement:<ErrorPage />,
        children:[
            { path: '', element: <Navigate to="/home" /> },
            { path: 'home', element: <Home /> },
            { path: 'login', element: <Login /> },  
            {
                path:'/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                    
                ),
            },
        {
            path:'profile',
            element:(
                <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            ),
        },
    ],

    },
])

const App4 = () => {
  return (
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
    )
}

export default App4