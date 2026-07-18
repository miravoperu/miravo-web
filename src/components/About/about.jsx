import "./about.css";
import { FaBolt, FaUsers } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="nosotros">

      <div className="aboutLeft">
        <span className="aboutTag">Sobre Nosotros</span>
        <h2>Una agencia obsesionada con los resultados.</h2>

        <p>
          Somos un equipo de estrategas, diseñadores y creadores de contenido
          que combina creatividad y datos para construir marcas que realmente
          conectan con las personas correctas.
        </p>

        <div className="aboutFeatures">

          <div className="aboutFeature">
            <FaBolt />
            <div>
              <h4>Estrategia basada en datos</h4>
              <p>Decisiones respaldadas por métricas, no por intuición.</p>
            </div>
          </div>

          <div className="aboutFeature">
            <FaUsers />
            <div>
              <h4>Equipo multidisciplinario</h4>
              <p>Diseño, video, desarrollo y marketing en un solo lugar.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="aboutRight">
        <div className="aboutStats">

          <div className="aboutStat">
            <h3>+500</h3>
            <span>Proyectos entregados</span>
          </div>

          <div className="aboutStat">
            <h3>+120</h3>
            <span>Clientes activos</span>
          </div>

          <div className="aboutStat">
            <h3>98%</h3>
            <span>Satisfacción</span>
          </div>

          <div className="aboutStat">
            <h3>+8</h3>
            <span>Años de experiencia</span>
          </div>

        </div>
      </div>

    </section>
  );
}

export default About;