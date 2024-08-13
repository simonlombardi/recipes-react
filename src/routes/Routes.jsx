import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Index from "../pages/Index"
import NewRecipe from "../pages/NewRecipe"

const Routes = () => {
    const router = createBrowserRouter([{
        path: '/',
        element: <Index />
    }, {
        path: '/new-recipe/',
        element: <NewRecipe />
    }])

    return <RouterProvider router={router} />
}

export default Routes