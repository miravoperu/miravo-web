import "./clients.css";

// Reemplaza estos logos por los reales cuando los tengas.
// Colócalos en /public/logos/ (ya tienes esa carpeta creada).
const clients = [
  { name: "Deco y Detalles", logo: "/logos/DYD.png" },
  { name: "Corporación Mobiliaria", logo: "/logos/CM.png" },
  { name: "Honigbee", logo: "/logos/H.png" },
];

function Clients() {
  return (
    <section className="clients" id="clientes">

      <span className="clientsTag">Marcas que confían en nosotros</span>

      <div className="clientsGrid">
        {clients.map((client) => (
          <div className="clientLogo" key={client.name}>
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default Clients;