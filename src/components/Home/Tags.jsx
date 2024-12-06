import "./Aside.css";
import { useEffect, useState } from "react";
import recipesFetch from "../../axios/config";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [show, setShow] = useState(0);

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

  const handleShow = () => {
    if (show === 0) {
      setShow(1);
    } else {
      setShow(0);
    }
  };
  return (
    <section id="tags">
      <h4>Tags</h4>
      <p className="acord-list" onClick={handleShow}>
        {!show ? <FaChevronDown /> : <FaChevronUp />}
      </p>
      <div class="tags-container">
        {tags.length == 0 ? (
          <Loading />
        ) : (
          tags.map((tag) =>
            show ? <Link to={`/search?tag/${tag}`}>{tag}</Link> : ""
          )
        )}
      </div>
    </section>
  );
};

export default Tags;
