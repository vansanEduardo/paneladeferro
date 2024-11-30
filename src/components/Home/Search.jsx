import { useState } from "react";
import "./Aside.css";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");


  return (
    <section id="search-bar">
      <h4>Busca</h4>
      <form>
        <input type="text" placeholder="Pesquise no Blog" 
        onChange={(e) => {setSearch(e.target.value)}}/>
        <Link to={`/recipes?search?q=${search}`}><input type="submit" value="Buscar" /></Link>
      </form>
    </section>
  );
};

export default Search;
