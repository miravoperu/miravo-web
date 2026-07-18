import "./Testimonials.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Reemplaza estos testimonios por los reales cuando los tengas.
const testimonials = [
  {
    name: "María Fernández",
    role: "CEO, Bloom Studio",
    quote:
      "El equipo de Miravo entendió nuestra marca desde el primer día. Los resultados superaron lo que esperábamos.",
  },
  {
    name: "Carlos Medina",
    role: "Fundador, Nova Foods",
    quote:
      "Profesionales, rápidos y con muy buen gusto. Nuestra presencia digital cambió completamente.",
  },
  {
    name: "Laura Torres",
    role: "Marketing Manager, Urbana",
    quote:
      "Cada campaña vino acompañada de datos claros. Se nota que saben lo que hacen.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">

      <div className="testimonialsHeader">
        <span className="testimonialsTag">Testimonios</span>
        <h2>Lo que dicen nuestros clientes</h2>
      </div>

      <div className="testimonialsGrid">
        {testimonials.map((t) => (
          <div className="testimonialCard" key={t.name}>

            <FaQuoteLeft className="quoteIcon" />

            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>

            <p className="testimonialQuote">{t.quote}</p>

            <div className="testimonialAuthor">
              <div className="avatar">{t.name.charAt(0)}</div>
              <div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Testimonials;