import Tecnologias from "../../componentes/Tecnologias";
import Tela from "../../componentes/Tela";
import "./styles.css"

const Home = () => {
    return (
        <Tela >
            <div className="posicionamento-home">
                <div className="apresentacao-home">
                    <h3 className="nome-apresentacao-home">Lucas Aguilar</h3>
                    <h1 className="titulo-apresentacao-home">Desenvolvedor <a className="texto-destaque">Full Stack</a></h1>
                    <ul>
                        <li className="areas-atuacao-apresentacao-home">Web</li>
                        <li className="areas-atuacao-apresentacao-home">Mobile</li>
                        <li className="areas-atuacao-apresentacao-home">Desktop</li>
                    </ul>
                </div>
                <div className="tecnologias-usadas-home">
                    <Tecnologias />
                </div>
            </div>
        </Tela>
    );
}

export default Home;