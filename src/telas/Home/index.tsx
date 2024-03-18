import FotoLucas from "../../componentes/FotoLucas";
import "./styles.css"

const Home = () => {
    return (
        <div className="posicionamento-home">
            <div className="apresentacao-home efeito-scroll-review">
                <h3 className="nome-apresentacao-home">Lucas Aguilar</h3>
                <h1 className="titulo-apresentacao-home">Desenvolvedor <a className="texto-destaque">Full Stack</a></h1>
                <ul className="efeito-scroll-review">
                    <li className="areas-atuacao-apresentacao-home">Web</li>
                    <li className="areas-atuacao-apresentacao-home">Mobile</li>
                    <li className="areas-atuacao-apresentacao-home">Desktop</li>
                </ul>
            </div>
            <div className="tecnologias-usadas-home">
                <FotoLucas />
            </div>
        </div>
    );
}

export default Home;