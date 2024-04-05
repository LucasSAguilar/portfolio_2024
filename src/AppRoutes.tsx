import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagina from "./Pagina";
import Galeria from "./telas/Galeria";
import SobreProjeto from "./telas/SobreProjeto";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagina />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/:id_query" element={<SobreProjeto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
