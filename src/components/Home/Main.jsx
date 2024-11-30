import "./Main.css";
import { useState, useEffect } from "react";
import recipesFetch from "../../axios/config";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await recipesFetch.get(
        "/recipes?limit=5&sortBy=rating&order=desc"
      );
      const data = response.data;

      setRecipes(data.recipes);
      console.log(recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <main id="post-container">
      <h1>Top 5 Best Recipes </h1>
      {recipes.length === 0 ? (
        [...Array(3)].map((_, index) => (
          <div className="posts-skeleton" key={index}>
            <Skeleton height="600px" width="600px" className="post-skeleton" />
            <Skeleton height="50px" width="150px"  />
            <Skeleton height="50px" width="600px"  />
            <Skeleton height="30px" width="100px"  />
          </div>
        ))
      ) : (
        recipes.map((recipe) => (
          <article className="post" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <h3 className="title">{recipe.name}</h3>
            <p className="description">
              {`Make ${recipe.name}, a ${recipe.cuisine} dish perfect for ${recipe.mealType}.
              With an approximate preparation time of ${recipe.cookTimeMinutes} minutes, this
              recipe is rated ${recipe.difficulty}, making it ideal for desired result
              or feature, such as 'a quick and easy meal' or 'a special treat
              for the family` }
            </p>
            <Link to={`/recipe/${recipe.id}`}>
              <button className="btnRecipe">Let's do it</button>
            </Link>
          </article>
        ))
      )}
    </main>
  );
};

export default Recipes;
