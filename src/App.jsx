import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Clients from "./components/Clients/clients";
import Services from "./components/Planes/planes";
import Portfolio from "./components/Portfolio/portfolio";
import About from "./components/About/about";
import Testimonials from "./components/Testimonials/testimonials";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

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