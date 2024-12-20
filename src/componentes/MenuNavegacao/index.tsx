import "./styles.css";
import icone_burguer from "../../assets/icones/icon_burguer.svg";
import icone_close from "../../assets/icones/close.svg";
import { useState } from "react";

interface btnsNavBar {
  onClickHome: () => void;
  onClickSobre: () => void;
  onClickProjetos: () => void;
  onClickContato: () => void;
}

const MenuNavegacao = ({
  onClickHome,
  onClickSobre,
  onClickProjetos,
  onClickContato,
}: btnsNavBar) => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  return (
    <>
      <div
        className={`glass-effect menu-hamburguer ${
          mostrarMenu ? "exibir-menu" : ""
        }`}
      >
        <ul className="lista-burguer">
          <li
            className="botoes-menu-burguer btn-burguer-home"
            onClick={() => {
              onClickHome();
              setMostrarMenu(false);
            }}
          >
            HOME
          </li>
          <li
            className="botoes-menu-burguer"
            onClick={() => {
              onClickProjetos();
              setMostrarMenu(false);
            }}
          >
            PROJETOS
          </li>
          <li
            className="botoes-menu-burguer"
            onClick={() => {
              onClickSobre();
              setMostrarMenu(false);
            }}
          >
            SOBRE MIM
          </li>
          <li
            className="botoes-menu-burguer"
            onClick={() => {
              onClickContato();
              setMostrarMenu(false);
            }}
          >
            CONTATO
          </li>
          <li className="btn-cv-burguer">
            <a
              className="link-btn-cv-burguer"
              href="https://drive.google.com/file/d/12y2UF4i0mzS3Gy26V9uJdGY0bE6Rh3vv/view?usp=sharing"
              target="_blank"
            >
              Baixe meu CV
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`glass-effect navbar-box ${
          mostrarMenu ? "escurecer-navbar" : null
        }`}
      >
        {
          // AQUI TROCA ------------------------------------------------
        }

        <h1 className="logo-navbar">
          Lucas. <p className="texto-destaque-navbar"> dev</p>
        </h1>

        <ul className="lista-btn-nav">
          <li className="botoes-menu-navegacao" onClick={onClickHome}>
            HOME
          </li>
          <li className="botoes-menu-navegacao" onClick={onClickProjetos}>
            PROJETOS
          </li>
          <li className="botoes-menu-navegacao" onClick={onClickSobre}>
            SOBRE MIM
          </li>
          <li className="botoes-menu-navegacao" onClick={onClickContato}>
            CONTATO
          </li>
        </ul>

        <div className="box-btn-cv">
          <a
            href="https://drive.google.com/file/d/12y2UF4i0mzS3Gy26V9uJdGY0bE6Rh3vv/view?usp=sharing"
            target="_blank"
            className="btn-cv"
          >
            Baixe meu CV
          </a>
        </div>
        <img
          src={mostrarMenu ? icone_close : icone_burguer}
          className="icone_hamburguer"
          onClick={() => setMostrarMenu(!mostrarMenu)}
        />
      </div>
    </>
  );
};

export default MenuNavegacao;
