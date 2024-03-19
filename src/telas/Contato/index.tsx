import "./styles.css";

const Contato = () => {
  return (
    <div className="section-contato">
      <h3 className="title-duvida-interesse efeito-scroll-review">
        Tem alguma dúvida ou interesse?
      </h3>
      <p className="explicacao-contato efeito-scroll-review">
        Envie um e-mail pelo formulário e te responderei em breve!
      </p>
      <form className="form-email efeito-scroll-review">
        <label>Nome:</label>
        <input placeholder="Insira seu nome" name="name" required />
        <label>E-mail:</label>
        <input placeholder="Insira seu e-mail" name="email" type="email" required />
        <label>Mensagem:</label>
        <textarea maxLength={500} placeholder="Insira sua mensagem aqui" name="message" required />

        <button className="form-btn-enviar">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
