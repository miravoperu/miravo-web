import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      
<div className="heroContent">
      <div className="heroLeft">

        <span className="heroTag">
          Agencia Creativa • Marketing • Desarrollo Web
        </span>

        <h1>

          Haz que tu negocio
          <br />

          sea <span>imposible</span>
          <br />

          de ignorar.

        </h1>

          <p>

Creamos estrategias, contenido audiovisual,
sitios web y soluciones digitales para empresas
que quieren vender más, generar confianza
y diferenciarse de su competencia.

</p>

        <div className="heroButtons">

          <a href="https://wa.me/51985441731" className="primary" target="_blank" rel="noopener noreferrer">
  Empezar proyecto
</a>

         <a href="#portafolio" className="secondary no-underline transition-colors duration-300">
  Ver trabajos
  <FaArrowRight />
</a>

        </div>

<div className="heroNumbers">

<div>

<h3>

+3M

</h3>

<span>

Visualizaciones

</span>

</div>

<div>

<h3>

+500

</h3>

<span>

Proyectos

</span>

</div>

<div>

<h3>

4.9★

</h3>

<span>

Valoración

</span>

</div>

</div>

      </div>

<div className="heroRight">

    <div className="imageContainer">

        <img
            src="/images/hero/hero.jpg"
            alt="Miravo Dashboard"
        />

        <div className="dashboardCard">

            <div className="dashboardHeader">

                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>

                <span>MIRAVO Studio</span>

            </div>

            <div className="dashboardBody">

                <div className="metric">

                    <h4>+320%</h4>

                    <span>Alcance</span>

                </div>

                <div className="bars">

                    <div className="bar b1"></div>
                    <div className="bar b2"></div>
                    <div className="bar b3"></div>
                    <div className="bar b4"></div>

                </div>

            </div>

        </div>

        <div className="floating one">

            🚀 Marketing

        </div>

        <div className="floating two">

            🎥 Producción

        </div>

    </div>

</div>

</div>

    </section>
  );
}

export default Hero;