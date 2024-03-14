import "./reset.css";
import "./global_styles.css";
import "./app_style.css";
import Navbar from "./componentes/MenuNavegacao";
import Home from "./telas/Home";
import SobreMim from "./telas/SobreMim";
import Tela from "./componentes/Tela";
import { useRef } from "react";
import Projetos from "./telas/Projetos";
import Contato from "./telas/Contato";
import Realizacoes from "./componentes/Realizacoes";
import Footer from "./componentes/Footer";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const sobreRef = useRef<HTMLDivElement>(null);
  const projetosRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSobre = () => {
    if (sobreRef.current) {
      console.log("aqui");
      sobreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProjetos = () => {
    if (projetosRef.current) {
      projetosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContato = () => {
    if (contatoRef.current) {
      contatoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Tela>
      <>
        <Navbar
          onClickContato={() => scrollToContato()}
          onClickHome={() => scrollToHome()}
          onClickProjetos={() => scrollToProjetos()}
          onClickSobre={() => scrollToSobre()}
        />
        <div ref={homeRef}>
          <Home />
        </div>
        <Realizacoes />
        <div ref={projetosRef}>
          <Projetos />
        </div>
          <div className="glass-effect divisao-sections"/>
        <div ref={sobreRef}>
          <SobreMim />
        </div>

        <div ref={contatoRef}>
          <Contato />
        </div>
        <Footer />
      </>
    </Tela>
  );
}

export default App;
