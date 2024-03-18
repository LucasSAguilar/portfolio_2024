import "./styles.css";
import github_icon from "../../assets/icones/icon_github.svg";
import website_icon from "../../assets/icones/icon_youtube.svg";
import youtube_icon from "../../assets/icones/icon_website.svg";

interface projetoInterface {
  id: number;
  titulo: string;
  descricao: string;
  video: string;
  codigo: string;
  site: string;
}

interface projetoProps {
  projeto: projetoInterface;
}

const CardProjeto = ({ projeto }: projetoProps) => {
  const data = projeto.titulo;

  return (
    <div className="card-projeto">
      <img alt="Banner 01" className="banner-projeto" />
      <div className="escritos-card">
        <h3 className="titulo-projeto">{projeto.titulo}</h3>
        <p className="descricao-projeto">{projeto.descricao}</p>
      </div>
      <div className="box-icons-projeto">
        {
          projeto.codigo !== "" ? <a href={projeto.codigo}><img src={github_icon} alt="Icone do github" className="icon-github" /></a> : null
        }
        {
          projeto.site !== "" ? <a href={projeto.site}><img src={website_icon} alt="Icone do site" className="icon-site" /></a> : null
        }
        {
          projeto.video !== "" ? <a href={projeto.video}><img src={youtube_icon} alt="Icone do youtube" className="icon-video" /></a> : null
        }
      </div>
    </div>
  );
};

export default CardProjeto;
