import "./styles.css"
import github_icon from "../../assets/icones/icon_github.svg"
import website_icon from "../../assets/icones/icon_youtube.svg"
import youtube_icon from "../../assets/icones/icon_website.svg"


const CardProjeto = () => {
    return (<div className="card-projeto">
        <img alt="Banner 01" className="banner-projeto" />
        <h3 className="titulo-projeto">Título do projeto</h3>
        <p className="descricao-projeto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

        <div className="box-icons-projeto">
            <img src={github_icon} alt="Icone do github" className="icon-github" />
            <img src={website_icon} alt="Icone do site" className="icon-site" />
            <img src={youtube_icon} alt="Icone do youtube" className="icon-video" />
        </div>

    </div>);
}

export default CardProjeto;