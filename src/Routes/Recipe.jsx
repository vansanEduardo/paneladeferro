import "./Recipe.css";
import { useEffect, useState } from "react";
import recipesFetch from "../axios/config";
import { useParams } from "react-router-dom";
import StarsRating from "../components/Home/StarsRating";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import comments from "../data/comments";
import Loading from "../components/Loading/Loading";


const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [show, setShow] = useState(0);

  const handleReview = () => {
   
    if (show === 0) {
      setShow(1);
      window.scroll(0,2000)
    } else {
      setShow(0);
    }
  };

  const { id } = useParams();

  const getRecipe = async () => {
    try {
      const response = await recipesFetch.get(`/recipes/${id}`);
      const data = response.data;
      setRecipe(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div className="container-pagerecipe">
      <div className="container-recipe">
        <div className="desc-recipe">

          <h1>{recipe.name}</h1>
          <div className="info-recipe">
          <p className="calories">
            <FaFireAlt />
            {recipe.caloriesPerServing}
          </p>

          <p className="serving">
            <IoPeople />
            {recipe.servings}
          </p>
          <p className="difficulty">{recipe.difficulty}</p>
          <p className="time">
            <MdOutlineAccessTime />
            {recipe.prepTimeMinutes}
          </p>
        </div>
          <img src={recipe.image} alt="" />

          <div className="rating-recipe">
            <StarsRating value={recipe.rating} />
            <p>{recipe.rating}</p>
          </div>
          <p id="count" onClick={handleReview}>
            Reviews: ({recipe.reviewCount})
          </p>
         
        </div>
        

        <div className="prepare-recipe">
          <div className="ingredients">
            <h2>Ingredients:</h2>
            <ul>
              {recipe.length === 0 ? (
                <Loading />
              ) : (
                recipe.ingredients.map((ingredient) => <li>{ingredient}</li>)
              )}
            </ul>
          </div>
          <div className="instructions">
            <h2>Instructions:</h2>
            <ol>
              {recipe.length === 0 ? (
                <Loading />
              ) : (
                recipe.instructions.map((instruction) => <li>{instruction}</li>)
              )}
            </ol>
          </div>
        </div>
      </div>
      <div className="container-review">
        {show === 0
          ? ""
          : comments.map((comment) => (
              <div className="comment" key={comment.id}>
                <p>{comment.name}</p>
                <p>{comment.comment}</p>
                <div className="rating-recipe">
                  <StarsRating value={comment.rating} />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Recipe;
