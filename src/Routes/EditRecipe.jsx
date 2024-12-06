import { useEffect, useState } from "react";
import recipesFetch from "../axios/config";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { Link } from "react-router-dom";

import "./EditRecipe.css";
const EditRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [calories, setCalories] = useState();
  const [time, setTime] = useState();
  const [difficulty, setDifficulty] = useState("easy");
  const [serving, setServing] = useState("easy");

  const getEditedRecipe = () => {
    const editedRecipes = JSON.parse(localStorage.getItem("editrecipe"));
    return editedRecipes || [];
  };

  const saveEditedRecipe = (recipe) => {
    const saveRecipe = getEditedRecipe();
    saveRecipe.push(recipe);
    localStorage.setItem("edit-recipe", JSON.stringify(saveRecipe));
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
    <div className="container-editrecipe">
      <div className="info-editrecipe">
        <h2>Edit Recipe Info</h2>
        <p>Title:</p>
        <input
          type="text"
          defaultValue={recipe.name}
          onChangeCapture={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p>Image URL:</p>
        <input
          type="text"
          defaultValue={recipe.image}
          onChangeCapture={(e) => {
            setUrl(e.target.value);
          }}
        />

        <p className="calories">
          <p>Calories:</p>
          <input
            type="number"
            defaultValue={recipe.caloriesPerServing}
            onChangeCapture={(e) => {
              setCalories(e.target.value);
            }}
          />
        </p>

        <p className="serving">
          <p>Servings:</p>
          <input
            type="number"
            defaultValue={recipe.servings}
            onChangeCapture={(e) => {
              setServing(e.target.value);
            }}
          />
        </p>
        <p>Difficulty:</p>
        <select
          name="difficulty"
          defaultValue={recipe.difficulty}
          onChangeCapture={(e) => {
            setDifficulty(e.target.value);
          }}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <p className="time">
          <p>Time:</p>
          <input
            type="number"
            defaultValue={recipe.prepTimeMinutes}
            onChangeCapture={(e) => {
              setTime(e.target.value);
            }}
          />
        </p>
      </div>

      <div className="btn-save-edit">
        <Link to="/recipes">
          <button>Save Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default EditRecipe;
