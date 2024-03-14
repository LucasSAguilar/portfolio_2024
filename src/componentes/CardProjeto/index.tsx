import "./styles.css"

const CardProjeto = () => {
    return (<div className="card-projeto">
        <img alt="Banner 01" className="banner-projeto" />
        <h3 className="titulo-projeto">Título do projeto</h3>
        <p className="descricao-projeto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

        <div className="box-icons-projeto">
            <img alt="Icone do github" className="icon-github" />
            <img alt="Icone do site" className="icon-site" />
            <img alt="Icone do youtube" className="icon-video" />
        </div>

    </div>);
}

export default CardProjeto;