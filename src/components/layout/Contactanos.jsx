import "./Contactanos.css";

const Contactanos = ({ darkMode }) => {
  return (
    <>
      <section id="contactanos">
        <h3>Contáctanos</h3>
        <form action="" className="formulario-contactanos" autoComplete="off">
          <div className="formulario">
            <label for="nombre " className={darkMode ? "dark" : ""}>
              Nombre:
            </label>
            <input
              className="rectangulo"
              type="text"
              name="nombre"
              placeholder="Escriba su nombre"
            />
          </div>
          <div className="formulario">
            <label for="correo" className={darkMode ? "dark" : ""}>
              Correo:
            </label>
            <input
              className="rectangulo"
              type="email"
              name="correo"
              placeholder="correo@correo.com"
            />
          </div>
          <div className="formulario">
            <label for="numero" className={darkMode ? "dark" : ""}>
              Número:
            </label>
            <input
              className="rectangulo"
              type="number"
              name="numero"
              placeholder="Escriba su número"
            />
          </div>
          <div className="formulario">
            <label for="motivo" className={darkMode ? "dark" : ""}>
              Motivo
            </label>
            <select className="rectangulo" name="motivo" id="motivo" required>
              <option value="" disabled hidden>
                seleccione su motivo
              </option>
              <option value="comprar">Comprar prendas</option>
              <option value="alquiler">Alquilar prendas</option>
            </select>
          </div>

          <div className="formulario">
            <button className="btn-iguales">
              Enviar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contactanos;
