import "./styles.css"
import node from "../../assets/languages/node.svg";
import { useState } from "react";
import linguagens from "../../mocks/linguagens";

const Tecnologias = () => {

    const [linguagemSelecionada, setLinguagemSeleciona] = useState("");
    const [tituloLinguagem, setTituloLinguagem] = useState("");
    const [descricaoLinguagem, setDescricaoLinguagem] = useState("");

    const exibirLinguagem = (linguagem: string) => {
        setLinguagemSeleciona(linguagem)
        const resultado = linguagens.filter((linguaMock) => { return linguaMock.nome === linguagem})
        setTimeout(() => {
            setTituloLinguagem(linguagem)
            setDescricaoLinguagem(resultado[0].descricao);

        }, 4500)

    }


    return <div className="techs-item">



        <div className="segurador segurador-left">
            <div className="parafuso-tech parafuso-top" />
            <div className="f1-tech" />
            <div className="f2-tech" />
            <div className="fmeio-tech" />
            <div className="f3-tech" />
            <div className="f4-tech" />
            <div className="parafuso-tech parafuso-bottom" />
        </div>

        <div className="top-techs glass-techs">
            <img className={`imagens-linguagem-home ${linguagemSelecionada === "NodeJS" ? "linguagem-selecionada" : null}`} src={node} alt="Logo do nodeJS" onClick={() => {
                exibirLinguagem("NodeJS");
            }} />
            <img className={`imagens-linguagem-home ${linguagemSelecionada === "NodeJS" ? "linguagem-selecionada" : null}`} src={node} alt="Logo do nodeJS" onClick={() => {
                exibirLinguagem("NodeJS");
            }} />
        </div>

        <div className="glass-effect opaco-glass">

        </div>

        <div className={`bottom-techs glass-techs ${tituloLinguagem === "NodeJS" ? "glass-green" : null}`}>
            <h3>{tituloLinguagem}</h3>
            <p className={`descricao-tech-base ${descricaoLinguagem !== "" ? "descricao-tech" : ""}`}>{descricaoLinguagem}</p>
        </div>
        <div className="segurador segurador-right">
            <div className="parafuso-tech parafuso-top" />
            <div className="f1-tech" />
            <div className="f2-tech" />
            <div className="fmeio-tech" />
            <div className="f3-tech" />
            <div className="f4-tech" />
            <div className="parafuso-tech parafuso-bottom" />
        </div>
    </div>;
}

export default Tecnologias;