import { Link } from "react-router-dom";
import "./Aside.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const Categories = () => {
  const [show, setShow] = useState(0);

  const handleShow = () => {
    if (show === 0) {
      setShow(1);
    } else {
      setShow(0);
    }
  };

  return (
    <section id="categories">
      <h4>Categories</h4>
      <p className="acord-list" onClick={handleShow}>
        {!show ? <FaChevronDown /> : <FaChevronUp />}
      </p>

      {!show ? (
        ""
      ) : (
        <div className="tags-container">
          
              <Link to={"/search?meal-type/Dinner"}>Dinner</Link>
           
              <Link to={"/search?meal-type/lunch"}>Lunch</Link>
           
              <Link to={"/search?meal-type/snack"}>Snack</Link>
           
           
              <Link to={"/search?meal-type/dessert"}>Dessert</Link>
           
           
              <Link to={"/search?meal-type/side dish"}>Side Dish</Link>
           
           
              <Link to={"/search?meal-type/appetizer"}>Appetizer</Link>
           
           
              <Link to={"/search?meal-type/breakfast"}>Breakfast</Link>
           
           
              <Link to={"/search?meal-type/beverage"}>Beverage</Link>
           
         
        </div>
      )}
    </section>
  );
};

export default Categories;
