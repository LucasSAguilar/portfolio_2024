import ScrollReveal from "scrollreveal";
import "./styles.css";
import { useEffect } from "react";

const Realizacoes = () => {
  useEffect(() => {
    const sr = ScrollReveal({ reset: true });

    sr.reveal("", {
      duration: 2000,
      distance: "80px",
    });
  }, []);

  return (
    <div className="box-realizacoes glass-effect efeito-scroll-review">
      <div className="box-valores">
        <h3>+70</h3>
        <p>Repositórios programados</p>
      </div>
      <div className="box-valores">
        <h3>05</h3>
        <p>Projetos desenvolvidos</p>
      </div>
      <div className="box-valores">
        <h3>01</h3>
        <p>e-book publicado</p>
      </div>
      <div className="box-valores">
        <h3>1052</h3>
        <p>copos de cafés tomados</p>
      </div>
    </div>
  );
};

export default Realizacoes;
