import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Clients from "./components/Clients/Clients";
import Services from "./components/Planes/planes";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;