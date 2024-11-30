import  "./Home.css";
import Main from "../components/Home/Main";
import Search from "../components/Home/Search";
import Categories from "../components/Home/Categories";
import Tags from "../components/Home/Tags";


const Home = () => {
  return (
    <div id="home">
      <div className="recipes">
        <Main />
      </div>
      <div className="sidebars">
        <Search />
        <Categories />
        <Tags />
      </div>
    </div>
  );
};

export default Home;
