import "./Recipes.css";
import recipesFetch from "../axios/config";
import { useEffect, useState } from "react";
import StarsRating from "../components/Home/StarsRating";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Tags from "../components/Home/Tags.jsx";
import Categories from "../components/Home/Categories.jsx";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await recipesFetch.get(`/recipes`);
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
      <Tags />
      <Categories />

      <h1>All Recipes </h1>
      <div className="recipes">
        {recipes.length === 0
          ? [...Array(18)].map((_, index) => (
              <div className="recipe-skeleton" key={index}>
                <Skeleton height={200} width={350} className="skeleton" />
              </div>
            ))
          : recipes.map((recipe) => (
              <Link
                to={`/recipe/${recipe.id}`}
                className="recipe-card"
                key={recipe.id}
              >
                <div className="img-recipe-card">
                  <img src={recipe.image} alt={recipe.name} />
                  <div className="stars">
                    <StarsRating value={recipe.rating} />
                  </div>
                  <p className="rating">{recipe.rating}</p>
                </div>
                <div className="infos">
                  <h3>{recipe.name}</h3>
                  <ul>
                    <li>Difficulty: {recipe.difficulty}</li>
                    <li>Cuisine: {recipe.cuisine}</li>
                    <li>PreparationTime: {recipe.prepTimeMinutes}m</li>
                    <li>Serving: {recipe.servings}</li>
                  </ul>
                  <div className="meal-type">
                    {recipe.mealType?.map((type, index) => (
                      <Link to={`/search?meal-type/${type}`}>
                        {index < 2 ? <p>{type}</p> : ""}
                      </Link>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Recipes;
