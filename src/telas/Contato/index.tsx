import "./styles.css";

const Contato = () => {
  return (
    <div className="section-contato">
      <h3 className="title-duvida-interesse">
        Tem alguma dúvida ou interesse?
      </h3>
      <p className="explicacao-contato">
        Envie um e-mail pelo formulário e te responderei em breve!
      </p>
      <form className="form-email">
        <label>Nome:</label>
        <input placeholder="Insira seu nome" required />
        <label>E-mail:</label>
        <input placeholder="Insira seu e-mail" type="email" required />
        <label>Mensagem:</label>
        <textarea maxLength={500} placeholder="Insira sua mensagem aqui" required />

        <button className="form-btn-enviar">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
