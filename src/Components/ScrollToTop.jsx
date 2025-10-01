import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Scroll al cambio di rotta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Scroll al caricamento/refresh della pagina
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
