import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './Routes/Home.jsx'
import Recipe from './Routes/Recipe.jsx'
import Recipes from './Routes/Recipes.jsx'
import SearchRecipes from './Routes/SearchRecipes.jsx'
import ManagePosts from './Routes/ManagePosts.jsx'
import EditRecipe from './Routes/EditRecipe.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <Recipes/>,
      },
      {
        path: "/search",
        element: <SearchRecipes/>,
      },
      {
        path: "/manage-posts",
        element: <ManagePosts/>,
      },
      {
        path: "/edit-recipe/:id",
        element: <EditRecipe/>,
      },
      {
        path: "/recipe/:id",
        element: <Recipe/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>
);

