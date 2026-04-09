import "./Acerca.css";

const Acerca = ({ darkMode }) => {
  return (
    <>
      <section id="acerca-de-nosotros">
        <h3>Acerca de nosotros</h3>
        <div className="columnas-acerca">
          <div className="col-izq">
            <img
              src="./assets/img/local.jpeg"
              alt="Local El Precioso"
              className="principal"
            />
            <img
              src="./assets/img/el-precioso-modo-light.jpeg"
              alt="Logo el precioso"
              className="secundario"
            />
          </div>
          <div className="col-der">
            <h5 className="titulo-somos">Nosotros Somos</h5>
            <p className={darkMode ? "dark" : ""}>
              una tienda especializada en la venta y alquiler de prendas
              elegantes para ocasiones especiales. Nos enfocamos en ofrecer una
              selección cuidada de vestidos, combinando estilo, calidad y
              accesibilidad para cada cliente. Creemos que cada evento merece
              una prenda que refleje personalidad y confianza. Por eso,
              brindamos atención personalizada, acompañando a nuestros clientes
              en la elección del vestido ideal, ya sea para alquilar o comprar.
              Nuestro compromiso es ofrecer una experiencia cercana y
              profesional, priorizando el buen gusto, el detalle y la
              satisfacción en cada elección.
            </p>
            <a href="#contactanos" className="btn-iguales">
              Contáctanos
              <div className="icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chat-left-dots-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Acerca;
