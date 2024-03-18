import CardProjeto from "../../componentes/CardProjeto";
import projetos from "../../mocks/projetos";
import "./styles.css";

const Projetos = () => {

    

  return (
    <div className="section-projetos">
      <h1 className="title-projetos efeito-scroll-review">
        Meus <a className="texto-destaque-projetos">projetos</a>
      </h1>
      <div className="box-cards-projeto efeito-scroll-review">
        {projetos.map((projeto) => <CardProjeto projeto={projeto}/>
        )}
      </div>
      <div className="box-posicionar-btn">
        <button className="btn-mais-projetos efeito-scroll-review">Ver mais projetos</button>
      </div>
    </div>
  );
};

export default Projetos;
