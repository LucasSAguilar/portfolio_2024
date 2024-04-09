import "./styles.css";
import "./languages_projetos.css";
import github_icon from "../../assets/icones/icon_github.svg";
import youtube_icon from "../../assets/icones/icon_youtube.svg";
import website_icon from "../../assets/icones/icon_website.svg";
import { useNavigate } from "react-router-dom";

interface projetoInterface {
  id: string;
  titulo: string;
  descricao: string;
  video: string;
  codigo: string;
  site: string;
  capa: string;
  markdown: string;
  tecnologias: string[];
}

interface projetoProps {
  projeto: projetoInterface;
}

const CardProjeto = ({ projeto }: projetoProps) => {
  const navigation = useNavigate();

  return (
    <div
      className="card-projeto"
      onClick={() => {
        if (projeto.markdown !== "") {
          navigation(`/galeria/${projeto.id}`);
        }
      }}
    >
      <img alt="Banner 01" className="banner-projeto" src={projeto.capa} />
      <div className="escritos-card">
        <h3 className="titulo-projeto">{projeto.titulo}</h3>
        <div className="box-tecnologias-projeto">
          {projeto.tecnologias.map((tech) => {
            return <p className={`container_linguagens_projeto ${tech}`}> {tech}</p>;
          })}
        </div>
        <p className="descricao-projeto">{projeto.descricao}</p>
        <div className="box-icons-projeto">
          <a href={projeto.codigo} target="_blank">
            <img
              src={github_icon}
              alt="Icone do github"
              className={`icon-github ${
                projeto.codigo !== "" ? "" : "icon-disabled"
              }`}
            />
          </a>
          <a href={projeto.site} target="_blank">
            <img
              src={website_icon}
              alt="Icone da web"
              className={`icon-site ${
                projeto.site !== "" ? "" : "icon-disabled"
              }`}
            />
          </a>
          <a href={projeto.video} target="_blank">
            <img
              src={youtube_icon}
              alt="Icone do youtube"
              className={`icon-video ${
                projeto.video !== "" ? "" : "icon-disabled"
              }`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProjeto;
