import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquise no Blog"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="btn-search">
        <Link to={`/search?search?q=${search}`}>
          <GoSearch />
        </Link>
      </div>
    </div>
  );
};

export default Search;
