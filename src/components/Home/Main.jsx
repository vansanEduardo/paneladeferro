import "./Main.css";
import { useState, useEffect } from "react";

import recipesFetch from "../../axios/config";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import comments from "../../data/comments";

import "react-loading-skeleton/dist/skeleton.css";
import StarsRating from "./StarsRating";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await recipesFetch.get(
        "/recipes?limit=3&sortBy=rating&order=desc"
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
    <main>
      <div className="banner">
        {/* Start Banner */}
        <div className="search-banner">
          <h1>Welcome to our Culinary Blog!</h1>
          <p>Explore a world of mouth-watering dishes and cooking tips.</p>
          <a href="#footer">
            {" "}
            <button>Subscribe to Newsletter</button>
          </a>
        </div>
        <div className="img-banner">
          <img src="./panela.png" alt="banner" />
        </div>
      </div>
      {/* End Banner */}
      {/* Start LastRecipes */}
      <div className="container-last-recipes">
        <h1>Latest Recipes</h1>
        <div className="last-recipes">
          {recipes.length === 0 ? (
            <Loading />
          ) : (
            recipes.map((recipe) =>
             
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
                      {recipe.mealType?.map((type) => (
                        <Link to={`/search?meal-type/${type}`}>
                          <p>{type}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Link>
              
            )
          )}
        </div>
      </div>
      {/* End LastRecipes */}
      {/* Start Products */}
      <div className="container-products">
        <div className="banner-products">
          <img
            src="https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="products">
          <div className="title-product">
            <h1>Featured Products</h1>
          </div>
          <div className="control-product">
            <div className="product">
              <img
                src="https://m.media-amazon.com/images/I/61whITHKwkL._AC_UF1000,1000_QL80_.jpg"
                alt=""
              />
              <p>Book</p>
              <p>$30</p>
            </div>
            <div className="product">
              <img
                src="https://m.media-amazon.com/images/I/71+Zd1HhX5L._UF1000,1000_QL80_.jpg"
                alt=""
              />
              <p>Book</p>
              <p>$30</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Products */}
      {/* Start Customer Reviews */}
      {/* End Customer Reviews */}
      <div className="container-customer-reviews">
        <div className="customer-header">
          <div className="customer-title">
            <h1>Customer Reviews</h1>
            <p>
              See what our readers have to say about their culinary adventures!
            </p>
          </div>
          <div className="customer-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1682310144714-cb77b1e6d64a?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        <div className="customer-reviews">
          {comments?.map((comment, index) =>
            index < 3 ? (
              <div className="review" key={comment.id}>
                <div className="review-header">
                  <p>{comment.name}</p>
                  <div className="stars">
                    <StarsRating value={comment.rating} />
                  </div>
                </div>
                <div className="review-comment">
                  <p>{comment.comment}</p>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Recipes;
