import "./styles.css";
import lucas_desenho from "../../assets/lucas/lucas_desenho.svg";
import alura from "../../assets/instituicoes/alura.svg";
import senac from "../../assets/instituicoes/senac.svg";
import estacio from "../../assets/instituicoes/estacio.svg";
import ub from "../../assets/instituicoes/ub.svg";
import github from "../../assets/icones/icon_github.svg";
import linkedin from "../../assets/icones/icon_linkedin.svg";
import instagram from "../../assets/icones/icon_instagram.svg";
import x from "../../assets/icones/icon_x.svg";

const SobreMim = () => {
  return (
    <div className="section-sobremim">
      <div className="div-perfil">
        <img
          src={lucas_desenho}
          alt="Lucas em versão desenho digital"
          className="img-lucas-desenho"
        />
        <div className="box-icons-rs">
            <img alt="icone linkedin" src={linkedin} className="icons-rs"/>
            <img alt="icone github" src={github} className="icons-rs"/>
            <img alt="icone x" src={x} className="icons-rs"/>
            <img alt="icone instagram" src={instagram} className="icons-rs"/>
        </div>
      </div>

      <div className="div-dados">
        <h3 className="title-page-sobremim">Quem sou?</h3>
        <p className="texto-apresentacao">
          Sou um desenvolvedor fullstack com sólida experiência na criação de
          sistemas abrangendo desde a arquitetura de servidores até a
          implementação da interface visual. Com mais de dois anos de
          experiência no setor, trago consigo um histórico comprovado de entrega
          de soluções tecnológicas eficazes e inovadoras.
        </p>
        <p className="texto-apresentacao">
          Minha paixão pela tecnologia e pelo desenvolvimento de software
          impulsiona-me a buscar constantemente a excelência em cada projeto que
          assumo. Estou entusiasmado para aplicar meu conjunto diversificado de
          habilidades e conhecimentos em novos desafios e colaborar com
          profissionais igualmente apaixonados pela criação de soluções digitais
          de classe mundial.
        </p>
        <h4 className="title-instituicoes">
          Instituições de ensino que fiz parte
        </h4>
        <div className="box-img-instituicoes">
          <img
            alt="Imagem da instituição Senac"
            src={senac}
            className="imagens-instituicoes"
          />
          <img
            alt="Imagem da instituição Senac"
            src={estacio}
            className="imagens-instituicoes"
          />
          <img
            alt="Imagem da instituição Senac"
            src={alura}
            className="imagens-instituicoes"
          />
          <img
            alt="Imagem da instituição Senac"
            src={ub}
            className="imagens-instituicoes"
          />
        </div>
      </div>
    </div>
  );
};

export default SobreMim;
