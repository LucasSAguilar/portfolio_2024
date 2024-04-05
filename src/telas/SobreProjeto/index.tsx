
import Tela from "../../componentes/Tela";
import "./styles.css";
import projetos from "../../mocks/projetos";
import { useNavigate, useParams } from "react-router-dom";
import Markdown from 'react-markdown';

const Galeria = () => {

    const navigation = useNavigate()
    const {id_query} = useParams()
    
    const encontrarPorID = () => {
       const a = projetos.find((projeto) => projeto.id === id_query)
       return a
       
    }
    const projeto_definido = encontrarPorID()


  return (
    <Tela>
      <div className="section-galeria">
        <h1 className="logo-navbar logo-galeria">
          Lucas. <p className="texto-destaque-navbar"> dev</p>
        </h1>
        <h2 className="galeria-title">{projeto_definido === undefined ? "" : projeto_definido.titulo}</h2>

        <div className="box-projetos-galeria">
        </div>
          <div className="btn-retornar-galeria" onClick={()=> navigation("/")}>
            Retornar
          </div>
      </div>
    </Tela>
  );
};

export default Galeria;
<Tela>
  <div></div>
</Tela>;
