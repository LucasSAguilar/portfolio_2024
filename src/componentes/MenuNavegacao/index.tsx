import "./styles.css"

interface btnsNavBar {
    onClickHome: () => void,
    onClickSobre: () => void,
    onClickProjetos: () => void,
    onClickContato: () => void
}

const MenuNavegacao = ({ onClickHome, onClickSobre, onClickProjetos, onClickContato }: btnsNavBar) => {


    return (
        <div className="navbar-box glass-effect">
            <h1 className="logo-navbar">Lucas. <p className="texto-destaque"> dev</p></h1>

            <ul className="lista-btn-nav">
                <li className="botoes-menu-navegacao" onClick={onClickHome}>HOME</li>
                <li className="botoes-menu-navegacao" onClick={onClickProjetos}>PROJETOS</li>
                <li className="botoes-menu-navegacao" onClick={onClickSobre}>SOBRE MIM</li>
                <li className="botoes-menu-navegacao" onClick={onClickContato}>CONTATO</li>
            </ul>

            <div className="box-btn-cv">
                <a href='https://drive.google.com/file/d/12UPk9kBqh1wgXdyMKnr4aiMFRwiJxgnP/view?usp=sharing' target="_blank" className="btn-cv">
                    Baixe meu CV
                </a>
            </div>
        </div>

    );
}

export default MenuNavegacao;