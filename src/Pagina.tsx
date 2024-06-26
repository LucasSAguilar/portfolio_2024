import "./global_styles.css";
import "./app_style.css";
import MenuNavegacao from "./componentes/MenuNavegacao";
import Home from "./telas/Home";
import SobreMim from "./telas/SobreMim";
import Tela from "./componentes/Tela";
import { useEffect, useRef } from "react";
import Projetos from "./telas/Projetos";
import Contato from "./telas/Contato";
import Realizacoes from "./componentes/Realizacoes";
import Footer from "./componentes/Footer";
import ScrollReveal from "scrollreveal";

function Pagina() {
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


  useEffect(() => {
    const sr = ScrollReveal({ reset: true });

    sr.reveal(".efeito-scroll-review", {
      duration: 2000,
      distance: "80px",
    });
  }, []);

  return (
    <Tela>
      <>
        <MenuNavegacao
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

export default Pagina;
