import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Index from "../pages/Index"
import NewRecipe from "../pages/NewRecipe"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import RecipeDetail from "../pages/RecipeDetail"


const Routes = () => {
    const { isAuth } = useContext(AuthContext)

    const authRoutes = createBrowserRouter([{
        path: '/',
        element: <Index />
    }, {
        path: '/new-recipe',
        element: <NewRecipe />
    },
    {
        path: '/recipe-detail/:id',
        element:  <RecipeDetail />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }])

    const unAuthRoutes = createBrowserRouter([{
        path: '/',
        element: <Index />
    }, 
    {
        path: '/new-recipe',
        element: <Navigate to='/login' />
    },
    {
        path: '/recipe-detail/:id',
        element: <Navigate to='/login' />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }])

    return <RouterProvider router={isAuth ? authRoutes : unAuthRoutes} />
}

export default Routes