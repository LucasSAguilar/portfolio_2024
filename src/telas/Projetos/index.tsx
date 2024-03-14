import CardProjeto from "../../componentes/CardProjeto";
import "./styles.css"

const Projetos = () => {
    return (
        <div className="section-projetos">
            <h1 className="title-projetos">Meus projetos</h1>
            <div className="box-cards-projeto">
                <CardProjeto />
                <CardProjeto />
                <CardProjeto />
            </div>
            <div className="box-posicionar-btn">
                <button className="btn-mais-projetos">Ver mais projetos</button>
            </div>
        </div>
    )
}

export default Projetos;