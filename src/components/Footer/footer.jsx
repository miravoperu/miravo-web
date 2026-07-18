import "./Footer.css";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footerTop">

        <div className="footerBrand">
          <h3 className="footerLogo">
            MIRA<span>VO</span>
          </h3>
          <p>
            Agencia creativa de marketing, contenido y desarrollo web para
            marcas que quieren crecer.
          </p>

          <div className="footerSocials">
            <a href="https://www.tiktok.com/@miravo.peru?is_from_webapp=1&sender_device=pc" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@miravo.peru?is_from_webapp=1&sender_device=pc" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.tiktok.com/@miravo.peru?is_from_webapp=1&sender_device=pc" aria-label="TikTok"><FaTiktok /></a>
            <a href="https://www.tiktok.com/@miravo.peru?is_from_webapp=1&sender_device=pc" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footerLinks">
          <h4>Navegación</h4>
          <a href="#">Inicio</a>
          <a href="#planes">Planes</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footerLinks">
          <h4>Legal</h4>
          <a href="https://www.tiktok.com/@miravo.peru?is_from_webapp=1&sender_device=pc">Términos y condiciones</a>
          <a href="https://www.tiktok.com/@miravo.peru?is_from_webapp=1&sender_device=pc">Política de privacidad</a>
        </div>

      </div>

      <div className="footerBottom">
        <span>© {new Date().getFullYear()} MIRAVO. Todos los derechos reservados.</span>
      </div>

    </footer>
  );
}

export default Footer;