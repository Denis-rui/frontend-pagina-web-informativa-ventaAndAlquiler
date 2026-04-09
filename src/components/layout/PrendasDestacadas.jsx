import "./PrendasDestacadas.css";
import Datos from "../data/Datos";
import Modal from "../Modal";
import { useState } from "react";

const PrendasDestacadas = ({ darkMode }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [prendasFiltradas, setPrendasFiltradas] = useState(Datos);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [prendaSeleccionada, setPrendaSeleccionada] = useState(Datos[0]);

  const filtrarPrendas = (e) => {
    const categoriaInput = e.target.value;
    setCategoriaSeleccionada(categoriaInput);

    if (categoriaInput === "Todos") {
      setPrendasFiltradas(Datos);
    } else {
      const nuevasPrendas = Datos.filter((prenda) => {
        if (categoriaInput === prenda.categoria) {
          return true;
        }
      });
      setPrendasFiltradas(nuevasPrendas);
    }
  };

  const abrirModal = (e, id) => {
    e.preventDefault();
    setModalAbierto(true);

    const prenda = Datos.find((prenda) => {
      if (prenda.id === id) {
        return true;
      }
    });
    setPrendaSeleccionada(prenda);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
    <>
      <section id="prendas-destacadas">
        <h3>Prendas destacadas</h3>
        <div className="filtros">
          <label htmlFor="todos">
            <input
              type="radio"
              value="Todos"
              name="categoria"
              id="todos"
              onChange={filtrarPrendas}
              checked={categoriaSeleccionada === "Todos"}
            />
            <span className="opcion">Todos</span>
          </label>

          <label htmlFor="damas">
            <input
              type="radio"
              value="Damas"
              name="categoria"
              id="damas"
              onChange={filtrarPrendas}
              checked={categoriaSeleccionada === "Damas"}
            />
            <span className="opcion">Damas</span>
          </label>

          <label htmlFor="caballeros">
            <input
              type="radio"
              value="Caballeros"
              name="categoria"
              id="caballeros"
              onChange={filtrarPrendas}
              checked={categoriaSeleccionada === "Caballeros"}
            />
            <span className="opcion">Caballeros</span>
          </label>

          <label htmlFor="niños">
            <input
              type="radio"
              value="Niños"
              name="categoria"
              id="niños"
              onChange={filtrarPrendas}
              checked={categoriaSeleccionada === "Niños"}
            />
            <span className="opcion">Niños</span>
          </label>

          <label htmlFor="niñas">
            <input
              type="radio"
              value="Niñas"
              name="categoria"
              id="niñas"
              onChange={filtrarPrendas}
              checked={categoriaSeleccionada === "Niñas"}
            />
            <span className="opcion">Niñas</span>
          </label>
        </div>
        <div className="prendas">
          {prendasFiltradas.map((prenda) => {
            return (
              <div className={"tarjeta " + (darkMode ? "dark" : "")}>
                <a
                  href="#"
                  className="miniatura-prenda"
                  onClick={(e) => abrirModal(e, prenda.id)}
                >
                  <img src={prenda.thumb.url} alt={prenda.thumb.alt} />
                </a>
                <div className="informacion-prenda">
                  <a
                    href="#"
                    className={"nombre-prenda " + (darkMode ? "dark" : "")}
                    onClick={(e) => abrirModal.apply(e, prenda.id)}
                  >
                    {prenda.info.nombre}
                  </a>
                  <p className={"categoria " + (darkMode ? "dark" : "")}>
                    {prenda.categoria}
                  </p>
                </div>
                <div className="boton-ir">
                  <a
                    href="#"
                    className="ir"
                    onClick={(e) => abrirModal(e, prenda.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-up-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                    </svg>
                    Ver detalles
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {modalAbierto && (
        <Modal cerrarModal={cerrarModal} prenda={prendaSeleccionada} />
      )}
    </>
  );
};
export default PrendasDestacadas;
