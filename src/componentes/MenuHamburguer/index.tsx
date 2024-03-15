import { useEffect, useState } from "react";
import "./styles.css";
import icone_close from "../../assets/icones/close.svg";

interface btnsNavBar {
  onClickHome: () => void;
  onClickSobre: () => void;
  onClickProjetos: () => void;
  onClickContato: () => void;
  exibirMenu: boolean;
}
const MenuHamburguer = ({
  onClickHome,
  onClickSobre,
  onClickProjetos,
  onClickContato,
  exibirMenu = true,
}: btnsNavBar) => {
  const [mostrar, setMostrar] = useState(false);
  useEffect(() => {
    setMostrar(exibirMenu);
  }, [exibirMenu]);

  return mostrar ? (
    <div className="glass-effect menu-hamburguer">
      <ul className="lista-burguer">
        <li
          className="botoes-menu-burguer btn-burguer-home"
          onClick={() => {
            onClickHome();
            setMostrar(!mostrar);
          }}
        >
          HOME
        </li>
        <li
          className="botoes-menu-burguer"
          onClick={() => {
            onClickProjetos();
            setMostrar(!mostrar);
          }}
        >
          PROJETOS
        </li>
        <li
          className="botoes-menu-burguer"
          onClick={() => {
            onClickSobre();
            setMostrar(!mostrar);
          }}
        >
          SOBRE MIM
        </li>
        <li
          className="botoes-menu-burguer"
          onClick={() => {
            onClickContato();
            setMostrar(!mostrar);
          }}
        >
          CONTATO
        </li>
        <li className="btn-cv-burguer">
          <a
            href="https://drive.google.com/file/d/12UPk9kBqh1wgXdyMKnr4aiMFRwiJxgnP/view?usp=sharing"
            target="_blank"
          >
            Baixe meu CV
          </a>
        </li>
      </ul>
    </div>
  ) : null;
};

export default MenuHamburguer;
