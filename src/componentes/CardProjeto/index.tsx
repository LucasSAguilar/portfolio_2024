import "./styles.css";
import github_icon from "../../assets/icones/icon_github.svg";
import youtube_icon from "../../assets/icones/icon_youtube.svg";
import website_icon from "../../assets/icones/icon_website.svg";
import capa from "../../assets/projetos/FT_digital/capa.webp";

interface projetoInterface {
  id: number;
  titulo: string;
  descricao: string;
  video: string;
  codigo: string;
  site: string;
  capa: string;
}

interface projetoProps {
  projeto: projetoInterface;
}

const CardProjeto = ({ projeto }: projetoProps) => {
  return (
    <div className="card-projeto">
      <img alt="Banner 01" className="banner-projeto" src={projeto.capa} />
      <div className="escritos-card">
        <h3 className="titulo-projeto">{projeto.titulo}</h3>
        <p className="descricao-projeto">{projeto.descricao}</p>
        <div className="box-icons-projeto">
          <a href={projeto.codigo}>
            <img
              src={github_icon}
              alt="Icone do github"
              className={`icon-github ${
                projeto.codigo !== "" ? "" : "icon-disabled"
              }`}
            />
          </a>
          <a href={projeto.site}>
            <img
              src={website_icon}
              alt="Icone da web"
              className={`icon-site ${
                projeto.site !== "" ? "" : "icon-disabled"
              }`}
            />
          </a>
          <a href={projeto.video}>
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
