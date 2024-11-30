import "./Recipes.css";
import recipesFetch from "../axios/config";
import { useEffect, useState } from "react";
import StarsRating from "../components/Home/StarsRating";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const location = useLocation();
  const filter = location.search.replace("?", "/");

  const getRecipes = async () => {
    try {
      const response = await recipesFetch.get(`/recipes${filter}`);
      const data = response.data;
      setRecipes(data.recipes);
      console.log(data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="container-recipes">
      <h1>Todas as Receitas </h1>
      <div className="recipes">
        {recipes.length === 0
          ? [...Array(9)].map((_, index) => (
              <div className="recipe-skeleton" key={index}>
                <Skeleton height={200} width={350} className="skeleton" />
              </div>
            ))
          : recipes.map((recipe) => (
              <div className="recipe" key={recipe.id}>
                <img src={recipe.image} alt={recipe.name} />
                <div className="info-recipes">
                  <h4>{recipe.name}</h4>
                  {recipe.mealType?.map((meal) => (
                    <p>{meal}</p>
                  ))}
                  <p>{recipe.difficulty}</p>

                  <div className="rating">
                    <StarsRating value={recipe.rating} />
                    <p>{recipe.rating}</p>
                  </div>
                  <Link to={`/recipe/${recipe.id}`}>
                    <button id="btn-recipe">Lets Do It</button>
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Recipes;
