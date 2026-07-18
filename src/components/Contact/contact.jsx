import "./contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: conectar con tu backend, formspree, o servicio de email
  };

  return (
    <section className="contact" id="contacto">

      <div className="contactLeft">
        <span className="contactTag">Contacto</span>
        <h2>Hablemos de tu próximo proyecto.</h2>
        <p>
          Cuéntanos qué necesitas y te contactamos en menos de 24 horas para
          agendar una llamada.
        </p>

        <div className="contactInfo">

          <div className="contactItem">
            <FaEnvelope />
            <span>miravoperu@gmail.com</span>
          </div>

          <div className="contactItem">
            <FaPhoneAlt />
            <span>+51 985 441 731</span>
          </div>

          <div className="contactItem">
            <FaMapMarkerAlt />
            <span>Lima, Perú</span>
          </div>

        </div>
      </div>

      <form className="contactForm" onSubmit={handleSubmit}>

        <div className="formRow">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
        </div>

        <input type="text" placeholder="Asunto" />

        <textarea rows="5" placeholder="Cuéntanos sobre tu proyecto" required></textarea>

        <button type="submit" className="contactSubmit">
          Enviar mensaje
        </button>

      </form>

    </section>
  );
}

export default Contact;