import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Garante que o scroll sempre vá para o topo ao mudar a rota
    window.scrollTo(0, 0);
  }, [location.pathname]); // Observa mudanças na URL

  return null;
};

export default ScrollToTop;