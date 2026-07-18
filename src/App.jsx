import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import clients from "./components/Clients/Clients";
import Services from "./components/Planes/planes";
import portfolio from "./components/Portfolio/Portfolio";
import about from "./components/About/About";
import testimonials from "./components/Testimonials/Testimonials";
import contact from "./components/Contact/Contact";
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