import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <form id="form-footer">
        <h2>Subscribe to Blog by Email</h2>
        <label for="email">
          Enter your email address to receive notifications of new publications
        </label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu E-mail"
          required
        />
        <input type="submit" value="Enviar" />
        <p>Join 100 thousand other subscribers</p>
      </form>
    </footer>
  );
};

export default Footer;
