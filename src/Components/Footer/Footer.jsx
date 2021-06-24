//icons
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

//image
import Logo from "../../Images/logoBlack.png";

//styled components
import { FooterContainer, Lists, Signature } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <Signature>
        <img
          src={Logo}
          alt={
            "Logo da Doarte. A palavra escrita normalmente, mas a letra 'O' é um círculo formado por mãos que se apoiam."
          }
        />

        <p>
          Descomplicamos o mundo dos investimentos. Reunimos todas as formas de
          investir disponíveis no mercado e, com transparência e alinhamento,
          sugerimos as soluções mais adequadas para o seu futuro.
        </p>

        <section>
          <IconContext.Provider value={{ color: "var(--red)", size: "1.7rem" }}>
            <FaFacebook />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "var(--red)", size: "1.7rem" }}>
            <FaInstagram />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "var(--red)", size: "1.7rem" }}>
            <FaTwitter />
          </IconContext.Provider>
        </section>
      </Signature>

      <Lists>
        <ul>
          <h4>MAPA</h4>
          <li>Inicio</li>
          <li>Contato</li>
          <li>Transações</li>
          <li>Sobre Nos</li>
        </ul>

        <ul>
          <h4>LEGAL</h4>
          <li>Termos do cadastro</li>
          <li>Termos do usuario</li>
        </ul>

        <ul>
          <h4>CONTATO</h4>
          <li>meajuda@warren.com.br</li>
          <li>0800 6054 900</li>
        </ul>
      </Lists>
    </FooterContainer>
  );
}

export default Footer;
