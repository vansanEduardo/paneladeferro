import "./Aside.css";
import { useEffect, useState } from "react";
import recipesFetch from "../../axios/config";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
const Tags = () => {
  const [tags, setTags] = useState([]);

  const getTags = async () => {
    try {
      const response = await recipesFetch.get("/recipes/tags");
      const data = response.data;
      setTags(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <section id="tags">
      <h4>Tags</h4>
      <div class="tags-container">
        {tags.length == 0 ? (
          <Loading />
        ) : (
          tags.map((tag, index) =>
            index <= 50 ? <Link to={`/recipes?tag/${tag}`}>{tag}</Link> : ""
          )
        )}
      </div>
    </section>
  );
};

export default Tags;
