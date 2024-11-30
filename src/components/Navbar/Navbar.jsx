import  "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header>
        <img src="./panela.png" alt="Logo do Blog" class="logo" />
        <h1>Panela De Ferro</h1>
        <p>Blog De Culinaria, Gastronomia e Receitas</p>
      </header>

      <nav id="navbar">
        <div id="navbar-inner">
       <Link to={"/"}>Home</Link>
       <Link to={"/recipes"}>Recipes</Link>
          <a href="#">Sobre</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
