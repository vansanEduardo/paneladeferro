
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <form id="form-footer">
        <h2>Assinar Blog por Email</h2>
        <label for="email">
          Digite seu Endereço de e-mail para receber notificações de novas
          publicações
        </label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu E-mail"
          required
        />
        <input type="submit" value="Enviar" />
        <p>Junte se a 100mil outros assinantes</p>
      </form>
      <img src="./panela.png" alt="Logo do Blog" class="logo-footer" />
     
    </footer>
  );
};

export default Footer;
