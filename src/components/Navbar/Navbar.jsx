import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbarLogo">
        MIRA<span>VO</span>
      </div>

      <nav className="navbarMenu">
        <a href="#">Inicio</a>
        <a href="#planes">Planes</a>
        <a href="#portafolio">Portafolio</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a href="https://wa.me/51985441731" className="navbarButton" target="_blank" rel="noopener noreferrer">
  Empecemos
</a>

    </header>
  );
}

export default Navbar;