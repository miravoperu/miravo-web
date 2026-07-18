import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import clients from "./components/Clients/clients";
import Services from "./components/Planes/planes";
import portfolio from "./components/Portfolio/portfolio";
import about from "./components/About/about";
import testimonials from "./components/Testimonials/testimonials";
import contact from "./components/Contact/contact";
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