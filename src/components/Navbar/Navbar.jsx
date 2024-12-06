import Search from "../Home/Search";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { MdClose } from "react-icons/md";


const Navbar = () => {
  const [menu, setMenu] = useState(0);

  const showMenu = (e) => {
    e.preventDefault();
    if (menu === 0) {
      setMenu(1);
    } else {
      setMenu(0);
      
    }
  };

  return (
    <nav>
      <h1>PanelaDeFerro</h1>
      <div className={`links ${menu ? "menu-links" : ""}`} >
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/recipes"}>
          <p>Recipes</p>
        </Link>
        <Link to={""}>
          <p>About</p>
        </Link>
        <Link to={"/manage-posts"}>
          <p>Manage</p>
        </Link>
        <div className="search">
        <Search />
      </div>

      </div>
      
      <div className="menu" onClick={(e) => showMenu(e)}>
        {!menu ? <MdMenu /> : <MdClose />}
      </div>
    </nav>
  );
};

export default Navbar;
