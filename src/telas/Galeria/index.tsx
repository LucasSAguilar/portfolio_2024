import { useRef } from "react";
import MenuNavegacao from "../../componentes/MenuNavegacao";
import Tela from "../../componentes/Tela";
import "./styles.css";
import projetos from "../../mocks/projetos";
import CardProjeto from "../../componentes/CardProjeto";
import { useNavigate } from "react-router-dom";

const Galeria = () => {

    const navigation = useNavigate()

  return (
    <Tela>
      <div className="section-galeria">
        <h1 className="logo-navbar logo-galeria">
          Lucas. <p className="texto-destaque-navbar"> dev</p>
        </h1>
        <h2 className="galeria-title">Galeria de projetos</h2>

        <div className="box-projetos-galeria">
          <h3 className="subtitle-galeria-box">API</h3>
          <div className="galeria-separacao-api">
            {projetos.map((projeto) =>
              projeto.tipo === "Trabalhos" ? (
                <CardProjeto projeto={projeto} />
              ) : null
            )}
          </div>
          <h3 className="subtitle-galeria-box">Ferramentas</h3>
          <div className="galeria-separacao-api">
            {projetos.map((projeto) =>
              projeto.tipo === "Trabalhos" ? (
                <CardProjeto projeto={projeto} />
              ) : null
            )}
          </div>
          <h3 className="subtitle-galeria-box">Jogos</h3>
          <div className="galeria-separacao-api">
            {projetos.map((projeto) =>
              projeto.tipo === "Trabalhos" ? (
                <CardProjeto projeto={projeto} />
              ) : null
            )}
          </div>
          <h3 className="subtitle-galeria-box">Trabalhos</h3>
          <div className="galeria-separacao-api">
            {projetos.map((projeto) =>
              projeto.tipo === "Trabalhos" ? (
                <CardProjeto projeto={projeto} />
              ) : null
            )}
          </div>
          <h3 className="subtitle-galeria-box">Sites demonstrativos</h3>
          <div className="galeria-separacao-api">
            {projetos.map((projeto) =>
              projeto.tipo === "Trabalhos" ? (
                <CardProjeto projeto={projeto} />
              ) : null
            )}
          </div>
        </div>
          <div className="btn-retornar-galeria" onClick={()=> navigation("/")}>
            Retornar
          </div>
      </div>
    </Tela>
  );
};

export default Galeria;
<Tela>
  <div></div>
</Tela>;
