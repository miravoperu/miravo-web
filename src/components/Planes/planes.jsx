import "./planes.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Básico",
    price: "S/ 800",
    period: "/mes",
    description: "Ideal para negocios que están comenzando su presencia digital.",
    features: [
      "Planificación y parrilla de contenido mensual",
      "1 red social gestionada",
      "1 visita mensual para captación de material",
      "Creación y edición de 8 contenidos al mes",
    ],
    featured: false,
  },
  {
    name: "Estándar",
    price: "S/ 1,200",
    period: "/mes",
    description: "El plan más elegido por empresas.",
    features: [
      "Estrategia de marca y parrilla mensual",
      "3 redes sociales gestionadas",
      "1 visita mensual para captación de material",
      "Creación y edición de 12 contenidos al mes",
      "Gestión y publicación de historias semanales",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "S/ 2,000",
    period: "/mes",
    description: "Solución integral para marcas que buscan dominar su mercado.",
    features: [
      "Estrategia multicanal y parrilla premium",
      "Gestión total de todos tus canales digitales",
      "2 visitas mensuales para cobertura y contenido",
      "Producción de más de 16 contenidos al mes",
      "Host para Transmisiones en Vivo (3 veces x semana / 2h)",
    ],
    featured: false,
  },
];

function Services() {
  return (
    <section className="planes" id="planes">

      <div className="planesBlob planesBlob1"></div>
      <div className="planesBlob planesBlob2"></div>

      <div className="planesHeader">
        <span className="planesTag">Planes</span>
        <h2>Elige el plan que impulse tu negocio</h2>
        <p>
          Soluciones flexibles diseñadas para acompañar el crecimiento de tu
          marca en cada etapa.
        </p>
      </div>

      <div className="planesGrid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`planCard ${plan.featured ? "featured" : ""}`}
          >
            {plan.featured && <span className="badge">Más popular</span>}

            <h3>{plan.name}</h3>
            <p className="planDescription">{plan.description}</p>

            <div className="planPrice">
              <span className="amount">{plan.price}</span>
              <span className="period">{plan.period}</span>
            </div>

            <ul className="planFeatures">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <FaCheck />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              href="https://wa.me/985441731" className={plan.featured ? "planBtnPrimary" : "planBtnSecondary"}
            >
              Elegir plan
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;