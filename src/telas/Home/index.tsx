import FotoLucas from "../../componentes/FotoLucas";
import iconNode from "../../assets/languages/node.svg"
import iconAngular from "../../assets/languages/angular.svg"
import iconReact from "../../assets/languages/react.svg"
import iconSQL from "../../assets/languages/sql.svg"
import iconBootstrap from "../../assets/languages/bootstrap.svg"

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
                <img src={iconNode} className="icon-geral icon-node"/>
                <img src={iconAngular} className="icon-geral icon-angular"/>
                <img src={iconReact} className="icon-geral icon-react"/>
                <img src={iconBootstrap} className="icon-geral icon-bootstrap"/>
                <img src={iconSQL} className="icon-geral icon-sql"/>
                <FotoLucas />
            </div>
        </div>
    );
}

export default Home;