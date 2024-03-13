import Navbar from "../MenuNavegacao";
import "./styles.css";

import { ReactElement } from "react";

interface TelaProps {
    children: ReactElement,
    secondary_styles?: string
}

const Tela = ({ children, secondary_styles }: TelaProps) => {
    return (
        <div className="imagem_background">
            <div className={`tela_base ${secondary_styles}`}>
                {children}
            </div>
        </div>
    );
}

export default Tela;