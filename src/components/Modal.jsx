import "./Modal.css";
import Datos from "./data/Datos";

const Modal = ({ cerrarModal, prenda }) => {
  return (
    <>
      <section className="modal">
        <div className="borde">
          <div className="contenido">
            <div className="cont-imagen">
              <img src={prenda.thumb.url} alt={prenda.thumb.alt} />
            </div>
            <div className="info">
              <h2 className="titulo-modal">{prenda.info.nombre}</h2>
              <p>{prenda.info.contenido.descripcion}</p>
              <p className="sub-titulo">Recomendación:</p>
              <p>{prenda.info.contenido.consejo}</p>
            </div>
          </div>
          <button
            className="boton-cerrar"
            id="btn-cerrar"
            onClick={cerrarModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};

export default Modal;
