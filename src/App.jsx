import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <ScrollToTop/>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default App;
