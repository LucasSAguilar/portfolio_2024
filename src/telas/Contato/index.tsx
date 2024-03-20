import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [aviso_email, setAvisoEmail] = useState("");
  const [aguardar_timing, setAguardarTiming] = useState(false);
  const [texto_btn, setTextoBtn] = useState("Enviar");

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    setTextoBtn("Aguarde 10 segundos...");
    setAguardarTiming(true);
    setTimeout(() => {
      setAguardarTiming(false);
      setTextoBtn("Enviar");
    }, 10000);

    const templateParams = {
      from_nome: nome,
      from_contato: email,
      from_mensagem: mensagem,
    };
    try {
      const response = await emailjs.send(
        "service_6apsdh8",
        "template_wi80q0o",
        templateParams,
        "c58WH0prkN-r2UzGD"
      );
      if (response.status === 200) {
        setAvisoEmail("E-mail enviado com sucesso!");
        setEmail("");
        setMensagem("");
        setNome("");
      } else {
        setAvisoEmail("Ocorreu um erro desconhecido");
      }
    } catch (e) {
      setAvisoEmail(`Ocorreu um erro: ${e}`);
    }
  };

  return (
    <div className="section-contato">
      <h3 className="title-duvida-interesse efeito-scroll-review">
        Tem alguma dúvida ou interesse?
      </h3>
      <p className="explicacao-contato efeito-scroll-review">
        Envie um e-mail pelo formulário e te responderei em breve!
      </p>
      <form
        className="form-email efeito-scroll-review"
        onSubmit={(e) => sendEmail(e)}
      >
        <label>Nome:</label>
        <input
          placeholder="Insira seu nome"
          name="name"
          required
          onChange={(e) => setNome(e.target.value)}
        />
        <label>E-mail:</label>
        <input
          placeholder="Insira seu e-mail"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Mensagem:</label>
        <textarea
          onChange={(e) => setMensagem(e.target.value)}
          maxLength={500}
          placeholder="Insira sua mensagem aqui"
          name="message"
          required
        />
        <p className="aviso-email-contato">{aviso_email}</p>
        <button
          className={`form-btn-enviar ${
            aguardar_timing ? "btn-enviar-email-disabled" : ""
          }`}
          disabled={aguardar_timing}
        >
          {texto_btn}
        </button>
      </form>
    </div>
  );
};

export default Contato;
