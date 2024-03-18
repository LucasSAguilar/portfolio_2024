import "./styles.css";
import lucas from "../../assets/lucas/Lucas.svg";

const FotoLucas = () => {
  return (
    <div className="tech-box">
        <img src={lucas} className="image-lucas efeito-scroll-review" />
    </div>
  );
};

export default FotoLucas;
