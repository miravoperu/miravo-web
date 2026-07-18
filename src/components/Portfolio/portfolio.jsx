import "./Portfolio.css";
import { FaExternalLinkAlt } from "react-icons/fa";

// Reemplaza estas rutas por tus imágenes reales en /public/images/portfolio/
const projects = [
  {
    title: "Campaña de lanzamiento",
    category: "Marketing Digital",
    image: "/images/portfolio/project1.jpg",
  },
  {
    title: "Rediseño de e-commerce",
    category: "Desarrollo Web",
    image: "/images/portfolio/project2.jpg",
  },
  {
    title: "Serie de contenido de marca",
    category: "Producción Audiovisual",
    image: "/images/portfolio/project3.jpg",
  },
  {
    title: "Estrategia de redes sociales",
    category: "Gestión de Redes",
    image: "/images/portfolio/project4.jpg",
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portafolio">

      <div className="portfolioHeader">
        <span className="portfolioTag">Portafolio</span>
        <h2>Proyectos que hablan por nosotros</h2>
        <p>
          Una muestra del trabajo que hemos hecho para marcas que confiaron
          en nuestro proceso creativo.
        </p>
      </div>

      <div className="portfolioGrid">
        {projects.map((project) => (
          <div className="portfolioCard" key={project.title}>

            <div className="portfolioImage">
              <img src={project.image} alt={project.title} />
              <div className="portfolioOverlay">
                <FaExternalLinkAlt />
              </div>
            </div>

            <span className="portfolioCategory">{project.category}</span>
            <h3>{project.title}</h3>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Portfolio;