import "./Contactanos.css";
import { useState } from "react";

const Contactanos = ({ darkMode }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState("");
  const [motivo, setMotivo] = useState("");
  const [error, setError] = useState(null);
  const [exito, setExito] = useState(null);

  const regEx = {
    nombre: /^[a-zA-Z\s]{2,}$/,
    correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    numero: /^9\d{8}$/,
  };
  const asignarValorInput = (e, tipoInput) => {
    if (tipoInput === "nombre") {
      setNombre(e.target.value);
    }
    if (tipoInput === "correo") {
      setCorreo(e.target.value);
    }
    if (tipoInput === "numero") {
      setNumero(e.target.value);
    }
    if (tipoInput === "motivo") {
      setMotivo(e.target.value);
    }
  };

  const validarFormulario = (e) => {
    e.preventDefault();

    const esValidoNombre = regEx.nombre.test(nombre);
    const esValidoCorreo = regEx.correo.test(correo);
    const esValidoNumero = regEx.numero.test(numero);
    const esValidoMotivo = motivo !== "";

    if (!esValidoNombre) {
      setError("Ingrese un nombre válido");
      setExito(null);
      return;
    }
    if (!esValidoCorreo) {
      setError("Ingrese un correo válido");
      setExito(null);
      return;
    }
    if (!esValidoNumero) {
      setError("Ingrese un número válido");
      setExito(null);
      return;
    }
    if (!esValidoMotivo) {
      setError("Seleccione un motivo");
      setExito(null);
      return;
    }
    if (esValidoNombre && esValidoCorreo && esValidoNumero && esValidoMotivo) {
      setError(null);
      setExito("Formulario enviado correctamente");
      setTimeout(() => {
        e.target.submit();
      }, 2000);
    }
  };

  return (
    <>
      <section id="contactanos">
        <h3>Contáctanos</h3>
        <form
          action=""
          className="formulario-contactanos"
          autoComplete="off"
          onSubmit={validarFormulario}
        >
          <div className="formulario">
            <label for="nombre " className={darkMode ? "dark" : ""}>
              Nombre:
            </label>
            <input
              className="rectangulo"
              type="text"
              name="nombre"
              placeholder="Escriba su nombre"
              value={nombre}
              onChange={(e) => asignarValorInput(e, "nombre")}
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
              value={correo}
              onChange={(e) => asignarValorInput(e, "correo")}
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
              value={numero}
              onChange={(e) => asignarValorInput(e, "numero")}
            />
          </div>
          <div className="formulario">
            <label for="motivo" className={darkMode ? "dark" : ""}>
              Motivo
            </label>
            <select
              className="rectangulo"
              name="motivo"
              id="motivo"
              value={motivo}
              onChange={(e) => asignarValorInput(e, "motivo")}
            >
              <option value="" disabled>
                Seleccione su motivo
              </option>
              <option value="comprar">Comprar prendas</option>
              <option value="alquiler">Alquilar prendas</option>
            </select>
          </div>
          {error && (
            <div className="formulario error">
              <p>{error}</p>
            </div>
          )}
          {exito && (
            <div className="formulario exito">
              <p>{exito}</p>
            </div>
          )}

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
