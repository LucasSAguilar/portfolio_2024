import Tela from "../../componentes/Tela";
import "./styles.css";
import projetos from "../../mocks/projetos";
import { useNavigate, useParams } from "react-router-dom";
import Markdown from "react-markdown";

const Galeria = () => {
  const navigation = useNavigate();
  const { id_query } = useParams();

  const encontrarPorID = () => {
    const a = projetos.find((projeto) => projeto.id === id_query);
    return a;
  };
  const projeto_definido = encontrarPorID();

  console.log(typeof projeto_definido?.markdown);

  return (
    <Tela>
      <div className="section-galeria">
        <div className="header-sobre-projeto">
          <h1 className="logo-navbar logo-galeria">
            Lucas. <p className="texto-destaque-navbar"> dev</p>
          </h1>
          <h2 className="galeria-title">
            {projeto_definido === undefined ? "" : projeto_definido.titulo}
          </h2>
        </div>
        <div className="box-sobre-projeto">
          <Markdown className="markdown-sobre-projeto">
            {projeto_definido?.markdown}
          </Markdown>
          <div className="box-botoes-projeto">
            {projeto_definido?.video !== "" ? (
              <a href={projeto_definido?.video} target="_blank">
                Vídeo
              </a>
            ) : null}

            {projeto_definido?.codigo !== "" ? (
              <a href={projeto_definido?.codigo} target="_blank">
                Código
              </a>
            ) : null}

            {projeto_definido?.site !== "" ? (
              <a href={projeto_definido?.site} target="_blank">
                Projeto
              </a>
            ) : null}

            <a onClick={() => navigation("/")} className="btn-voltar">
              Retornar
            </a>
          </div>
        </div>
      </div>
    </Tela>
  );
};

export default Galeria;
<Tela>
  <div></div>
</Tela>;
