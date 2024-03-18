import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagina from "./Pagina";
import Galeria from "./telas/Galeria";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagina />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
