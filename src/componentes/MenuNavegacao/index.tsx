import "./styles.css"

const MenuNavegacao = () => {
    return (
        <div className="navbar-box glass-effect">
            <h1 className="logo-navbar">Lucas. <p className="texto-destaque"> dev</p></h1>

            <ul className="lista-btn-nav">
                <li>HOME</li>
                <li>SOBRE MIM</li>
                <li>PROJETOS</li>
                <li>CONTATO</li>
            </ul>

            <div className="box-btn-cv">
                <button className="btn-cv">
                    Baixe meu CV
                </button>
            </div>
        </div>

    );
}

export default MenuNavegacao;