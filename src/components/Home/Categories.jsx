import { Link } from "react-router-dom";
import "./Aside.css";

const Categories = () => {
 
  
  return (
    <section id="categories">
      <h4>Categorias</h4>
      <nav>
        <ul>
          <li>
            <Link to={"/recipes?meal-type/Dinner"}>Dinner</Link>
          </li>
          <li>
          <Link to={"/recipes?meal-type/lunch"}>Lunch</Link>
          </li>
          <li>
          <Link to={"/recipes?meal-type/snack"}>Snack</Link>
          </li>
          <li>
          <Link to={"/recipes?meal-type/dessert"}>Dessert</Link>
          </li>
          <li>
          <Link to={"/recipes?meal-type/side dish"}>Side Dish</Link>
          </li>
          <li>
          <Link to={"/recipes?meal-type/appetizer"}>Appetizer</Link>
          </li>
          <li>
          <Link to={"/recipes?meal-type/breakfast"}>Breakfast</Link>
          </li>
          <li>
          <Link to={"/recipes?meal-type/beverage"}>Beverage</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Categories;
